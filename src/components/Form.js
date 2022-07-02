import { useRef } from 'react';
import styles from '../styles/Form.module.css';
import fetchMapsAPI from '../hooks/fetchMapsAPI';

export default function Form() {
  const fromInputRef = useRef();
  const toInputRef = useRef();

  function submitHandler(e) {
    e.preventDefault();

    const fromLocation = fromInputRef.current.value;
    const toLocation = toInputRef.current.value;

    // Call Google Maps API
    // const data = fetchMapsAPI(fromLocation, toLocation);
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

export async function getServerSideProps() {
  const resp = await fetch(
    `https://maps.googleapis.com/maps/api/directions/json?origin=london&destination=leeds&mode=transit&key=${process.env.REACT_APP_GOOGLE_MAPS_API}`
  );

  // https://cors-anywhere.herokuapp.com/
  const data = await resp.json();

  console.log(data);

  return {
    props: {},
  };
}
