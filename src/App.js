import { useEffect } from 'react';
import './App.css';
import { useState } from 'react';



// 1. 앱이 실행되자마자, 현재 위치 기반의 날씨 정보가 보인다.
// 2. 날씨 정보 -> 도시, 섭씨, 화씨, 날씨 상태 (4개)
// 3. 5개의 버튼 -> (현재위치, 다른 4개 도시)
// 4. 도시 버튼 onclick -> 도시별 날씨 정보가 나온다.
// 5. 현재 위치 버튼 -> 다시 현재위치 기반의 날씨 정보가 나온다.
// 6. 데이터를 들고오는 동안 로딩 스피너가 돈다.

const API_KEY = '5e453c2354843c612b6b8ff77f3d73c4'

function App() {


  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude
      let lon = position.coords.longitude
      let weatherInfo = getWeatherByCurrentLocation(lat, lon)
      console.log(weatherInfo)
    })
  }

  const getWeatherByCurrentLocation = async (latitude, longitude) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&lang=kr`
    let response = await fetch(url)
    let data = await response.json()
    console.log("data", data)
  }

  useEffect(() => {
    getCurrentLocation()
  }, [])

  return (
    <div>

    </div>
  );
}

export default App;
