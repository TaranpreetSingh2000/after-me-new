import React from "react";
import style from "./card.module.css";
import {  useNavigate } from "react-router-dom";


const Card = ({ key, cardTitle, cardIcon }) => {
  const navigate = useNavigate();

  const handlechange=()=>{
    navigate('/table')
  }
  return (
    <div className={style.card} id={key} onClick={handlechange}>
      <div className={style.inner_card}>
        <img className={style.image} src={cardIcon} alt={cardTitle} />
        <div className={style.card_title}>
          <h6>{cardTitle}</h6>
        </div>
      </div>
    </div>
  );
};

export default Card;
