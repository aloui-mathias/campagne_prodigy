import { useEffect, useRef } from "react";
import styles from "../styles/Button.module.css";

const Button = ({ text, onClick }) => {
  const buttonRef = useRef();
  const targetRef = useRef();

  function handleMove(e) {
    const x = -50 + (e.pageX - buttonRef.current.offsetLeft - 300 / 2) / 3;
    const y = -10 + (e.pageY - buttonRef.current.offsetTop - 100 / 2) / 3;

    targetRef.current.style.setProperty("--x", `${x}px`);
    targetRef.current.style.setProperty("--y", `${y}px`);
  }

  useEffect(() => {
    buttonRef.current.addEventListener("mousemove", handleMove);

    return () => {
      buttonRef.current.removeEventListener("mousemove", handleMove, true);
    };
  }, [buttonRef]);

  return (
    <button ref={buttonRef} className={styles.button} onClick={onClick}>
      <div className={styles.pattern}>
        <div
          ref={targetRef}
          className={[styles.target, styles.inner, styles.bg4].join(" ")}
        ></div>
      </div>
      <div className={styles.text}>{text}</div>
    </button>
  );
};

export default Button;
