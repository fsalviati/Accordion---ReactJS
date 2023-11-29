import React from "react";

const AccordionItem = ({ title, text, itemNumber, open, handleClick }) => {
  return (
    <div className={open ? "open item" : "item"} onClick={() => handleClick()}>
      <div className="accordion-question-container">
        <div className="number">{itemNumber}</div>
        <div className="title">{title}</div>
        <span className="icon">+</span>
      </div>
      <div
        className={
          open
            ? "accordion-answer-container-show"
            : "accordion-answer-container"
        }
      >
        <p className="text">{text}</p>
      </div>
    </div>
  );
};

export default AccordionItem;
