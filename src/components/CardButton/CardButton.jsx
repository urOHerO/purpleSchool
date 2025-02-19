import "./CardButton.css";

const CardButton = ({ children, className, ...props }) => {
  return <button {...props} className={`card-button ${className ? className : ''}`}>{children}</button>;
};

export default CardButton;
