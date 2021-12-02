import Moment from 'moment';

const key = "b0c43b1ed43591d261dfd26cabb18859";

class WeatherHelper {

//convert degree Kelvin to Fahrenheit
kToF(degreeK) {
    const degreeF = (degreeK - 273.15) * 9 / 5 + 32;
    return Math.round(degreeF * 100) / 100
}
    
//get weather forcast data from API
async getWeatherDataForCity(city) {
    const requestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}`

    const response = await fetch(requestUrl, {
        method: 'GET',
    });

    let responseData;

    if (response.ok) {
        await response.json().then((data) => {
            responseData = data;
        });
    }

    if (!responseData) { return };

    return {
        city_name: city,
        temperature: this.kToF(responseData.list[0].main.temp),
        type: responseData.list[0].weather[0].main,
        humidity: responseData.list[0].main.humidity,
        wind: responseData.list[0].wind.speed,
        forcast: [{
                day: Moment(responseData.list[0].dt_txt).format('MM/DD/YYYY'),
                type: responseData.list[0].weather[0].main,
                temperature: this.kToF(responseData.list[0].main.temp),
                wind: responseData.list[0].wind.speed,
                humidity: responseData.list[0].main.humidity,
            },
            {
                day: Moment(responseData.list[8].dt_txt).format('MM/DD/YYYY'),
                type: responseData.list[8].weather[0].main,
                temperature: this.kToF(responseData.list[8].main.temp),
                wind: responseData.list[8].wind.speed,
                humidity: responseData.list[8].main.humidity,
            },
            {
                day: Moment(responseData.list[16].dt_txt).format('MM/DD/YYYY'),
                type: responseData.list[16].weather[0].main,
                temperature: this.kToF(responseData.list[16].main.temp),
                wind: responseData.list[16].wind.speed,
                humidity: responseData.list[16].main.humidity,
            },
            {
                day: Moment(responseData.list[24].dt_txt).format('MM/DD/YYYY'),
                type: responseData.list[24].weather[0].main,
                temperature: this.kToF(responseData.list[24].main.temp),
                wind: responseData.list[24].wind.speed,
                humidity: responseData.list[24].main.humidity,
            },
            {
                day: Moment(responseData.list[32].dt_txt).format('MM/DD/YYYY'),
                type: responseData.list[32].weather[0].main,
                temperature: this.kToF(responseData.list[32].main.temp),
                wind: responseData.list[32].wind.speed,
                humidity: responseData.list[32].main.humidity,
            },
        ]
    }
}

}
  
export default new WeatherHelper();