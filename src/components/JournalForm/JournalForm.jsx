import React, { useEffect, useReducer, useRef, useState } from "react";
import s from "./JournalForm.module.css";
import Button from "../Button/Button";
import cn from "classnames";
import { formReducer, INITIAL_STATE } from "./JournalForm.state";
import Input from "../Input/Input";

const JournalForm = ({ addItem }) => {
  const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
  const { isValid, isFormReadyToSubmit, values } = formState;
  const titleRef = useRef();
  const dateRef = useRef();
  const textRef = useRef();

  const focusError = (isValid) => {
    switch (true) {
      case !isValid.title:
        titleRef.current.focus();
        break;
      case !isValid.date:
        dateRef.current.focus();
        break;
      case !isValid.text:
        textRef.current.focus();
        break;
    }
  };

  useEffect(() => {
    let timerId;
    if (!isValid.date || !isValid.text || !isValid.title) {
      focusError(isValid);
      timerId = setTimeout(() => {
        dispatchForm({ type: "RESET_VALIDITY" });
      }, 2000);
    }
    return () => {
      clearTimeout(timerId);
    };
  }, [isValid]);

  useEffect(() => {
    if (isFormReadyToSubmit) {
      addItem(values);
      dispatchForm({ type: "CLEAR" });
    }
  }, [isFormReadyToSubmit, values, addItem]);

  const onChange = (e) => {
    dispatchForm({
      type: "SET_VALUE",
      payload: { [e.target.name]: e.target.value },
    });
  };

  const addJournalItem = (e) => {
    e.preventDefault();
    dispatchForm({ type: "SUBMIT" });
  };
  return (
    <form className={s["journal-form"]} onSubmit={addJournalItem}>
      <div>
        <Input
          onChange={onChange}
          value={values.title}
          ref={titleRef}
          type="text"
          name="title"
          appearence='title'
          isValid={isValid.title}
        />
      </div>
      <div className={s["form-row"]}>
        <label htmlFor="date" className={s["form-label"]}>
          <img
            src="/Calendar.svg"
            alt="Иконка календаря"
            width={"20px"}
            height={"20px"}
          />
          <span>Дата</span>
        </label>
        <Input
          onChange={onChange}
          value={values.date}
          ref={dateRef}
          type="date"
          name="date"
          id="date"
          isValid={isValid.date}
        />
      </div>
      <div className={s["form-row"]}>
        <label htmlFor="tag" className={s["form-label"]}>
          <img
            src="/Folder.svg"
            alt="Иконка календаря"
            width={"20px"}
            height={"20px"}
          />
          <span>Метка</span>
        </label>
        <Input
          onChange={onChange}
          value={values.tag}
          type="text"
          name="tag"
          id="tag"
        />
      </div>
      <textarea
        onChange={onChange}
        value={values.text}
        ref={textRef}
        name="text"
        id=""
        cols="30"
        rows="5"
        className={cn(s.input, {
          [s.invalid]: !isValid.text,
        })}
      ></textarea>
      <Button text="Сохранить" />
    </form>
  );
};

export default JournalForm;
