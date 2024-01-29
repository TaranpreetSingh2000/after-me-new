import React, { useEffect, useState } from "react";
import style from "./Title.module.css";
import Typewriter from 'typewriter-effect/dist/core';

const Title = (props) => {
  const [typewriterStarted, setTypewriterStarted] = useState(false);

  useEffect(() => {
    if (!typewriterStarted) {
      new Typewriter(`.${style.title}`, {
        strings: [props.title],
        autoStart: true,
        loop: true,
      });
      setTypewriterStarted(true);
    }
  }, [typewriterStarted, props.title]);

  return <h2 className={`${style.title} typewriter`}>{props.title}</h2>;
};

export default Title;
