import React from 'react'

const WeatherBox = ({ weather }) => {
    return (
        <div>
            <div>name : {weather?.name}</div>
            <div>temp : {weather?.main.temp}</div>
            <div>description : {weather?.weather[0].description}</div>
            <div>wind speed : {weather?.wind.speed}</div>
        </div>
    )
}

export default WeatherBox