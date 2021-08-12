import React, { useState, useEffect } from 'react';
import Weather from '../Weather/Weather';
import './Loading.scss';

function Loading() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function getList() {
      try {
        let response = await fetch("http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=41815d12e0e531a86b8d8b0bc1b4c2f1&cnt=20");
        response = await response.json();
        setIsLoaded(true);
        setItems(response);
        console.log('res ', response);
        console.log('items ', items);
      } catch (error) {
        setIsLoaded(true);
        setError(error);
      }
    }

    getList();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div className="Loading">Loading...</div>;
  } else {
    return (
      <div className="Show">
        <Weather items={items}/>
      </div>
    )
  }
}

export default Loading;