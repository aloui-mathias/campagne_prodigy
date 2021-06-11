import { useEffect, useRef } from "react";
import styles from "../styles/Input.module.css";

const Input = ({ value, placeholder, error, onKeyPress, onChange }) => {
  return (
    <>
      <div className={styles.emailInput}>
        <input
          required
          type="text"
          className={styles.input}
          value={value}
          placeholder={placeholder}
          onKeyPress={onKeyPress}
          onChange={onChange}
        />
      </div>
      <span className={styles.error}>{error}</span>
    </>
  );
};

export default Input;
