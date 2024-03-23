import React from 'react'
import CloudIcon from '../img/CloudIcon.png'

const WeatherBox = ({ weather }) => {

    return (
        <div className='weather-box'>
            <div className='weather-title'>{weather?.name}</div>
            <div className='weather-image'></div>
            {/* <div >temp : {weather?.main.temp}</div> */}
            <div className='weather-temp-box'>
                <span className='temp-max'>{weather?.main.temp_max}° - </span>
                <span className='temp-min'>{weather?.main.temp_min}° C</span>
            </div>
            {/* <div>description : {weather?.weather[0].description}</div>
            <div>wind speed : {weather?.wind.speed}</div> */}
        </div>
    )
}

export default WeatherBox