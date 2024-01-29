import React, { useState, useEffect } from "react";
import { Col } from "react-bootstrap";
import style from './Chatbot.module.css'

export default function Chatbot() {
  const [result, setResult] = useState("");
  const [question, setQuestion] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();

    if (question) {
      formData.append("question", question);
    }

    fetch("http://127.0.0.1:5000/predict", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setResult(data.result);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };

  const handleToggleChatbot = () => {
    setIsVisible(!isVisible);
  };

  // useEffect(() => {
  //   const timeoutId = setTimeout(() => {
  //     setIsVisible(true);
  //   }, 5000);

  //   return () => clearTimeout(timeoutId);
  // }, []);

  return (
    <div>
      <div className={`robot-container ${style.robotContainer}`}>
        <img
          src="https://media.istockphoto.com/id/1359585151/photo/cute-blue-robot-giving-thumbs-up-3d.jpg?s=612x612&w=0&k=20&c=xAekoyOf_aboQimdNlGawCGT6uS-N8ELK-PLzMhNvdw="
          width="100px"
          alt="robot"
          onClick={handleToggleChatbot}
        />
      </div>
      {isVisible && (
        <div className={`chatbot-popup ${style.chatbotpopup}`}>
          <div className={`page-content page-container mb-5 mx-3 ${style.transition}`} id="page-content">
            <div className="padding">
              <div className="row d-flex justify-content-end">
                <Col md={4}>
                  <div className="card card-bordered">
                    <div className="card-header">
                      <h5 className={`card-title ${style.cardTitle}`}>How Can I help You?</h5>
                    </div>
                    <div className="publisher bt-1 border-light px-4 py-3">
                      <img
                        className="avatar avatar-xs"
                        src="https://img.icons8.com/color/36/000000/administrator-male.png"
                        alt="..."
                      />
                      <input
                        className="form-control my-2"
                        type="text"
                        placeholder="Add your question"
                        value={question}
                        onChange={handleQuestionChange}
                      />
                      <button
                        className={`btn btn-primary my-1 ${style.chatbotsubmitbtn}`}
                        onClick={handleSubmit}
                      >
                        Submit
                      </button>
                    </div>
                    {result && (
                      <p className="font-weight-bold px-4">{result}</p>
                    )}
                  </div>
                </Col>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
