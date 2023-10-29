import getWeather from "./WeatherData";
import {useState} from "react";



function WeatherSearch(){
    
    const[weather, setWeather]=useState(["","","",""])


    async function fetchWeather(input: string) {
        try {
          const data = await getWeather(input);
          setWeather([data.name,data.temp_c, data.condition, data.icon]);
        } catch (error) {
          console.error(error);
        }
    }    
    const handleSearchClick = () => {
        const cityInput = (document.querySelector(".WeatherSearchInput") as HTMLInputElement)?.value;
        if (cityInput) {
          fetchWeather(cityInput);
        }
      };


    if(weather[0].length > 0){
        return(
            <div className="WeatherSearchDiv">
                <h3>Please insert your city:</h3>
                <input id="cityInput" className="WeatherSearchInput" placeholder="Input City"/>
                <button className="WeatherSearchButton" onClick={handleSearchClick}> Search </button>
                <div className="WeatherContent">
                    
                     <ul className="WeatherList">
                        <li><p>Location:</p> {weather[0]}</li>
                        <li><p>Temp(c)</p> {weather[1]} </li>
                        <li><p>{weather[2]}</p> </li>
                        <li><img src={weather[3]} alt="Weather"></img></li>
                    </ul>
                </div>   
            </div>
    
        )
    }
    else{
        return(
            <div className="WeatherSearchDiv">
                <h3>Please insert your city:</h3>
                <input id="cityInput" className="WeatherSearchInput" placeholder="Input City"/>
                <button className="WeatherSearchButton" onClick={handleSearchClick}> Search </button> 
                <div className="WeatherContent"><p>No City selected</p></div>   
            </div>
            )
    }
   
}

export default WeatherSearch;