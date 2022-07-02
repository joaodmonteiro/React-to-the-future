export default async function getServerSideProps(from, to) {
  const resp = await fetch(
    `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/directions/json?origin=london&destination=leeds&mode=transit&key=${process.env.REACT_APP_GOOGLE_MAPS_API}`
  );

  // https://cors-anywhere.herokuapp.com/
  const data = await resp.json();

  console.log(data);

  return data;
}
