import { useState } from "react";
import "./Button.css";

const Button = () => {
  const [text, setText] = useState("Открыть");
  const clicked = () => {
    if (text === "Открыть") {
      setText("Закрыть");
    } else {
      setText("Открыть");
    }
  };
  return (
    <button onClick={clicked} className="button accent">
      {text}
    </button>
  );
};

export default Button;
