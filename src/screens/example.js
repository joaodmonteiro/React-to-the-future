import { React, useState, useEffect } from 'react';
import { Box, Text } from '@chakra-ui/react';
export const ExampleFetch = () => {
  const [airQualityData, setAirQualityData] = useState([]);
  console.log(airQualityData);

  useEffect(() => {
    async function getAirQuality() {
      const res = await fetch(
        'https://api.ambeedata.com/latest/by-lat-lng?lat=51.530112&lng=-0.0822173',
        {
          method: 'GET',
          headers: {
            'x-api-key':
              '98557c7e147dce2926573a404b7404eb6dccd673bc7044e4c0d13583b5bb6392',
            'Content-type': 'application/json',
          },
        }
      );
      if (res.ok === true) {
        const data = await res.json();
        setAirQualityData(data.stations);
      }
    }
    getAirQuality();
  }, []);

  return (
    <>
      <Box>
        <Text size="large" color="black">
          Air Quality Data:
        </Text>
        {/* Show lat and long */}
        {airQualityData.map(data => {
          return <Text>{data.OZONE}</Text>;
        })}
      </Box>
    </>
  );
};
