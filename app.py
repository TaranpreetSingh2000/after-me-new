import os
from dotenv import load_dotenv
from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from PyPDF2 import PdfReader
from langchain.text_splitter import CharacterTextSplitter
from langchain.embeddings.openai import OpenAIEmbeddings
from langchain.vectorstores import FAISS
from langchain.llms import OpenAI
from langchain.chains.question_answering import load_qa_chain
from langchain.callbacks import get_openai_callback
from langchain_experimental.agents.agent_toolkits import create_csv_agent
from langchain_community.llms import OpenAI as OpenAICommunity
from langchain_openai import OpenAIEmbeddings

import io


# Load environment variables from .env file
load_dotenv()

app = Flask(__name__)
CORS(app)
# Configure the database
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root@localhost/storage'

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# Read OpenAI API keys from environment variables
openai_api_key = os.getenv("OPENAI_API_KEY")

# Define the File model with additional columns for file name and file extension
class File(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    file_content = db.Column(db.LargeBinary(length=(2**32)-1))
    file_name = db.Column(db.String(255))  # Adjust the length according to your needs
    file_extension = db.Column(db.String(10))  # Adjust the length according to your needs

# ... (rest of your code)

@app.route('/predict', methods=['POST'])
def predict():
    file_id = 1  # Assuming 'file_id' is sent from the frontend
    file_data = File.query.get(file_id)

    question = request.form['question']
    if file_data:
        # Fetch name, extension, and content from the File object
        file_name = file_data.file_name
        file_extension = file_data.file_extension
        file_content = file_data.file_content

        # Print the fetched data
        print(f"File Name: {file_name}")
        print(f"File Extension: {file_extension}")
        # Print content as binary data, you might need to handle it accordingly based on your use case
        print("File Content:", file_content)

        if file_extension.lower() == '.csv':
            # CSV-based question answering
            with io.BytesIO(file_content) as file_obj:  # Create a file-like object from the binary content
                agent = create_csv_agent(OpenAICommunity(temperature=0), file_obj, verbose=True)  # Pass the file object
                question = request.form['question']
                result = agent.run(question)
        elif file_extension.lower() == '.pdf':
            with io.BytesIO(file_content) as file_obj:
                pdf_reader = PdfReader(file_obj)
                text = ''
                for page in pdf_reader.pages:
                    text += page.extract_text()
        
                text_splitter = CharacterTextSplitter(
                    separator="\n",
                    chunk_size=1000,
                    chunk_overlap=200,
                    length_function=len
                )
                chunks = text_splitter.split_text(text)
                embeddings = OpenAIEmbeddings()
                knowledge_base = FAISS.from_texts(chunks, embeddings)
                
                question = request.form['question']
                if question:
                    docs = knowledge_base.similarity_search(question)

                    llm = OpenAI(api_key=openai_api_key)
                    chain = load_qa_chain(llm, chain_type="stuff")
                    with get_openai_callback() as cb:
                        result = chain.run(input_documents=docs, question=question)
                        print(cb)
                else:
                    result = {'error': 'No question provided'}

    return jsonify({'result': result})
    

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
