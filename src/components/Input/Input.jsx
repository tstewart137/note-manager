
import s from "./style.module.css";

export function Input({ type, placeholder, onTextChange }) {
  return (
  
     
      <input
        type={type || "text"}
        className={s.input}
        onChange={(e) => onTextChange(e.target.value)}
        placeholder={placeholder}
      />

  );
}