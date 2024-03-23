import { useEffect } from 'react';
import './App.css';
import { useState } from 'react';
import WeatherBox from './component/WeatherBox';
// import City from './component/City';



// 1. 앱이 실행되자마자, 현재 위치 기반의 날씨 정보가 보인다.
// 2. 날씨 정보 -> 도시, 섭씨, 화씨, 날씨 상태 (4개)
// 3. 5개의 버튼 -> (현재위치, 다른 4개 도시)
// 4. 도시 버튼 onclick -> 도시별 날씨 정보가 나온다.
// 5. 현재 위치 버튼 -> 다시 현재위치 기반의 날씨 정보가 나온다.
// 6. 데이터를 들고오는 동안 로딩 스피너가 돈다.


//1. world-map에 City 버튼 3개를 만든다.
//2. City 버튼 onClick -> 해당 city 객체에 대한 getWeatherByCityLocation 호출
//3. getWeatherByCityLocation -> fetch(), data -> setState,
//4. state -> <City>, props전달

//weather-info가 업데이트된다.
// lat, long
//한국 : 37.5685, 127.0743
//뉴욕 : 42.3909, -73.4526
//도쿄 : 35.6528, 139.8394, 
//런던 : 51.509865, -0.118092

const choice = {
  newyork: {
    name: 'NewYork',
    latitude: 42.3909,
    longitude: -73.4526,
  },
  tokyo: {
    name: 'Tokyo',
    latitude: 35.6528,
    longitude: 139.8394,
  },
  london: {
    name: 'London',
    latitude: 51.5098,
    longitude: -0.1180,
  }
}

const API_KEY = '5e453c2354843c612b6b8ff77f3d73c4'

function App() {

  const [weather, setWeather] = useState(null)
  // const [loading, setLoading] = useState(false)
  // const [citySelect, setCitySelect] = useState(null)

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude
      let lon = position.coords.longitude
      let weatherInfo = getWeatherByLocation(lat, lon)
      console.log(weatherInfo)
    })
  }

  const getWeatherByLocation = async (latitude, longitude) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&lang=kr`
    // setLoading(true)
    let response = await fetch(url)
    let data = await response.json()
    setWeather(data)
    // setLoading(false)
    console.log("data : ", data)
  }

  // const cityButtonHandler = (city) => {
  //   // console.log(choice[city])
  //   let chosen_city = choice[city]
  //   setCitySelect(chosen_city)
  //   console.log("choice[city] : ", choice[city], "/ citySelect : ", citySelect)
  // }

  // const getCityLocation = (City) => {
  //   console.log(setCitySelect(choice[City]))
  //   let lan = citySelect.latitude
  //   let lon = citySelect.longitude
  //   let weatherInfo = getWeatherByLocation(lan, lon)
  //   console.log(citySelect.name, weatherInfo)
  // }


  useEffect(() => {
    getCurrentLocation()
    // getCityLocation()
  }, [])

  return (
    <div className='root'>
      <div className='main'>
        <div className='left-container'>
          <div className='world-map'>
            {/* <button onClick={() => (cityButtonHandler('newyork'))}>newyork</button>
            <button onClick={() => (cityButtonHandler('tokyo'))}>tokyo</button>
            <button onClick={() => (cityButtonHandler('london'))}>london</button> */}
          </div>
          <div className='world-info'>world-info</div>
        </div>
        <div className='right-container'>
          <WeatherBox className='weather-info' weather={weather} />
          <div className='current-button'>current-button</div>
        </div>
      </div>
    </div >
  );
}

export default App;
