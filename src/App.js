import React, { useState, useEffect } from 'react';

function App() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13';
    const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'ac07a20f5emsh701def20c4e8556p101077jsnee557b484313',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };

    fetch(url, options)
      .then(response => response.json())
      .then(data => setWeather(data))
  }, []);

  return (
    <div>{JSON.stringify(weather)}</div>
  );
}

export default App;