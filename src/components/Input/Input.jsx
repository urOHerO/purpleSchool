import React, { forwardRef } from "react";
import s from "./Input.module.css";
import cn from "classnames";

const Input = forwardRef(({ className, isValid = true, appearence, ...props }, ref) => {
  return (
    <input
      {...props}
      ref={ref}
      className={cn(className, s.input, {
        [s.invalid]: !isValid,
        [s["input-title"]]: appearence === "title",
      })}
    />
  );
});

export default Input;
