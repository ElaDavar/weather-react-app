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
        let response = await fetch("http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40");
        response = await response.json();
        setIsLoaded(true);
        setItems(response);
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