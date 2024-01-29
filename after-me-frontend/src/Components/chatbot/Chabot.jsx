import React, { useState } from "react";
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import style from './Chatbot.module.css'

export default function Chatbot() {
  const [result, setResult] = useState("");
  const [question, setQuestion] = useState("");

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

  return (
    <div className="page-content page-container mb-5 mx-3" id="page-content">
      <div className="padding">
        <div className="row d-flex justify-content-end">
          <Col md={4}>
            <div className="card card-bordered" >
              <div className="card-header">
                <h5 className={`card-title ${style.cardTitle}`}>How Can I help You?</h5>
              </div>
              <div className="publisher bt-1 border-light px-4 py-3">
                <img className="avatar avatar-xs" src="https://img.icons8.com/color/36/000000/administrator-male.png" alt="..." />
                <input
                  className="form-control my-2"
                  type="text"
                  placeholder="Add your question"
                  value={question}
                  onChange={handleQuestionChange}
                />
                <button className={`btn btn-primary my-2 ${style.chatbotsubmitbtn}`} onClick={handleSubmit}>Submit</button>
              </div>
              {result && (
                <p className="mt-1 font-weight-bold px-4">
                  {result}
                </p>
              )}
            </div>
          </Col>
        </div>
      </div>
    </div>
  );
}
