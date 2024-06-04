import React, { useState, useEffect } from 'react';

const App = () => {
  const [catFacts, setCatFacts] = useState(null);

  const fetchCatFacts = () => {
    fetch('https://catfact.ninja/fact')
      .then(response => response.json())
      .then(data => setCatFacts(data.fact))
  };

  useEffect(() => {
    fetchCatFacts();
  }, []);

  return (
    <>
    <p>{catFacts}</p>
    <button onClick={() => fetchCatFacts()}>More</button>
    </>
  );
}

export default App;