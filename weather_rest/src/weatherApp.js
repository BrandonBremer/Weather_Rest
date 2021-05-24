import './App.css';
import React, { useEffect, useState } from "react";
import Weather from './weather';
import Hourly from './hourly';
import Daily from './daily';

var city;
//pro.openweathermap.org/data/2.5/forecast/hourly?lat={lat}&lon={lon}&appid={API key}
//const REACT_APP_API_KEY = 78d1ea06ba2e72a2f0a6bf0760a4c12e;
export default function WeatherApp() {
  
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);
  var [daily, setD] = useState(1);
  //var daily = 0;
  useEffect(() => {
    const fetchData = async () => {
      const url = new URL("https://api.openweathermap.org/data/2.5/onecall");
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(`${url}?lat=${lat}&lon=${long}&units=metric&APPID=78d1ea06ba2e72a2f0a6bf0760a4c12e`)
      .then(res => res.json())
      .then(result => {
        setData(result)
      
      });
      
    }
  
    fetchData();
  }, [lat,long])
  // <pre>{JSON.stringify(data, undefined, 4)}</pre>
 const current = () =>
 {
   setD(1);
 }
 const day = () =>
 {
  setD(3);
 }
 const hourly = () =>
 {
  setD(2);
 }
  return (
    <div className="App">
      
     <button onClick={ ()=>current()}>Current Weather</button>
     <button onClick = {()=>hourly()}>Hourly Weather</button>
     <button onClick = {()=>day()}>Daily Weather</button>
    
      {(typeof data.current != 'undefined'&& daily===1) ? (
        
          <Weather weatherData={data}/>
      ): (
        
    
        <div></div>

        
      )}
     {(typeof data.current != 'undefined'&& daily===2) ? (
        <Hourly weatherData={data}/>
      ): (
        <div></div>
      )}
      
      {(typeof data.current != 'undefined'&& daily===3) ? (
        <Daily weatherData={data}/>
      ): (
        <div>
          
        </div>
      )}
    </div>
  );
}