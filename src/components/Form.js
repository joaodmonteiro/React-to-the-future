import { useRef } from 'react';
import styles from '../styles/Form.module.css';

export default function Form() {
  const fromInputRef = useRef();
  const toInputRef = useRef();

  function submitHandler(e) {
    e.preventDefault();

    const fromLocation = fromInputRef.current.value;
    const toLocation = toInputRef.current.value;

    // Call Google Maps API
  }
  return (
    <div className={styles.container}>
      <form className={styles.form} action="" onSubmit={submitHandler}>
        <div>From:</div>
        <input ref={fromInputRef} type="text" />
        <div>To:</div>
        <input ref={toInputRef} type="text" />
        <input type="submit" />
      </form>
    </div>
  );
}
