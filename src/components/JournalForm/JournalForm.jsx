import React, { useState } from "react";
import s from "./JournalForm.module.css";
import Button from "../Button/Button";
import cn from "classnames";

const JournalForm = ({ addItem }) => {
  const [formValidState, setFormValidState] = useState({
    title: true,
    text: true,
    date: true,
  });

  let isFormValid = true;

  const addJournalItem = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    if (!formProps.title?.trim().length) {
      setFormValidState((state) => ({ ...state, title: false }));
      isFormValid = false;
    } else {
      setFormValidState((state) => ({ ...state, title: true }));
    }
    if (!formProps.text?.trim().length) {
      setFormValidState((state) => ({ ...state, text: false }));
      isFormValid = false;
    } else {
      setFormValidState((state) => ({ ...state, text: true }));
    }
    if (!formProps.date) {
      setFormValidState((state) => ({ ...state, date: false }));
      isFormValid = false;
    } else {
      setFormValidState((state) => ({ ...state, date: true }));
    }
    if (!isFormValid) {
      return;
    }
    addItem(formProps);
  };
  return (
    <form className={s['journal-form']} onSubmit={addJournalItem}>
      <input
        type="text"
        name="title"
        className={cn(s.input, {
          [s.invalid] : !formValidState.title
        })}
      />
      <input
        type="date"
        name="date"
        className={cn(s.input, {
          [s.invalid] : !formValidState.date
        })}
      />
      <input type="text" name="tag" />
      <textarea
        name="text"
        id=""
        cols="30"
        rows="5"
        className={cn(s.input, {
          [s.invalid] : !formValidState.text
        })}
      ></textarea>
      <Button text="Сохранить" />
    </form>
  );
};

export default JournalForm;
