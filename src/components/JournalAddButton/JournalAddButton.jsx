import React from "react";
import "./JournalAddButton.css";
import CardButton from "../CardButton/CardButton";

const JournalAddButton = () => {
  return (
    <CardButton className="journal-add">
      <img className="plus" src="./plus1.svg" alt="" />
      Новое воспоминание
    </CardButton>
  );
};

export default JournalAddButton;
