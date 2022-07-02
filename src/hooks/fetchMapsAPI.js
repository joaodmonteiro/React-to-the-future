export default async function fetchMapsAPI(from, to) {
  const resp = await fetch(
    `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/directions/json?origin=${from}&destination=${to}&mode=transit&key=${process.env.REACT_APP_GOOGLE_MAPS_API}`
  );

  const data = await resp.json();

  console.log(data);

  return data;
}
