
import {weatherData} from "./Types"

async function getWeather(city : string): Promise<weatherData>{
  if(city.length > 0){
    const response = await fetch("http://api.weatherapi.com/v1/current.json?key=9b846c94580e471b8d9115220232810&q=" + city +"&aqi=no");

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const weatherResponse = await response.json();

    // Extract the specific attributes you need
    const weatherData: weatherData = {
      name: weatherResponse.location.name,
      temp_c: weatherResponse.current.temp_c,
      condition: weatherResponse.current.condition.text,
       icon: weatherResponse.current.condition.icon,
      };

    return weatherData;
  } 
  else{
    const weatherData: weatherData = {
      name: "",
      temp_c: "",
      condition: "",
       icon: "",
      };
    return weatherData;
  } 
}


export default getWeather;

