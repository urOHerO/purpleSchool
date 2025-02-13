import React from "react";
import "./JournalList.css";
import CardButton from "../CardButton/CardButton";
import JournalItem from "../JournalItem/JournalItem";

const JournalList = ({ items }) => {
  if (items.length === 0) {
    return <p>Записей пока нет, добавьте своё!</p>;
  }

  const sortItems = (a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  };

  return (
    <>
      {items.sort(sortItems).map((item) => (
        <CardButton key={item.id}>
          <JournalItem title={item.title} text={item.text} date={item.date} />
        </CardButton>
      ))}
    </>
  );
};

export default JournalList;
