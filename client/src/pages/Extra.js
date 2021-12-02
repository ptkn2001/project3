import React , { useState }  from 'react';
import WeatherHelper from '../utils/weatherHelper';
import UnderConstructionIcon from '../icons/site-under-construction.jpg';
import CloudIcon from '../icons/cloudy.jpg';

const Travel = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');

const handleSearchOnClick = () => {
  if(city) {
    WeatherHelper.getWeatherDataForCity(city).then((data) => {
      setWeatherData(data);
    });
  }

}

  return (
      <div>
        <div className="align-center justify-center">
          <h1>Welcome to Travel!</h1>
        </div>
        
        <div className="flex-column">
        <div className="flex-row justify-space-between">
        
        <div className="flex-row">
            <div className="mr-2" >
                <input className="p-2" type='text' placeholder="Search by City" onChange={(event) => setCity(event.target.value)}></input>
            </div>
            <div className="mr-1">
                <button className="btn btn-info" type='submit' onClick={handleSearchOnClick}>Search</button>
            </div>
        </div>
        
        {weatherData && (
          <div className="flex-column">
            <div className="justify-center">
            <h2>5 days forcast for {city}</h2>
              </div>
          <div className="flex-row">
          {weatherData.forcast.map((forcast) => (
          <div class="card bg-primary m-2">
            <h3 class="card-title text-light p-2">{forcast.day}</h3>
            <img src={CloudIcon} alt="weather icon" style={{height: '40px', width: '40px'}} />
            <div class="card-body">
                <p class="card-text text-light">Temp: {forcast.temperature} &deg; F</p>
                <p class="card-text text-light">Wind: {forcast.wind} MPH</p>
                <p class="card-text text-light">Humidity: {forcast.humidity} %</p>
            </div>
        </div>
        ))}
        </div>
        </div>
          )}
          </div>
        <div className="align-center">
          <img src={UnderConstructionIcon} alt="under construction icon" style={{height: '300px', width: '300px'}} />
        </div>
        </div>
      </div>
  );
};

export default Travel;
