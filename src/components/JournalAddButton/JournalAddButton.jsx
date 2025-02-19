import React from "react";
import "./JournalAddButton.css";
import CardButton from "../CardButton/CardButton";

const JournalAddButton = ({ clearForm }) => {
  return (
    <CardButton className="journal-add" onClick={clearForm}>
      <img className="plus" src="./plus1.svg" alt="" />
      Новое воспоминание
    </CardButton>
  );
};

export default JournalAddButton;
