const APIKey = 'FWeRGcaiaG10H8aMNDWSLXpxaEf30iIF'
const baseURL = 'http://dataservice.accuweather.com/'

const getCityURL = cityName =>
 `${baseURL}locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`

const getWeatherURL = cityKey => 
  `${baseURL}currentconditions/v1/${cityKey}?apikey=${APIKey}&language=pt-br`


const fetchData = async url => {
  try {
    const response = await fetch(url)

    if(!response.ok) {
      throw new Error('Não foi possível obter os dados')
    }

    return response.json()
  } catch ({name, message}) {
    alert(`${name}: ${message}`)
  }
}

const getCityData = cityName => fetchData(getCityURL(cityName))

const getCityWeather = cityKey => fetchData(getWeatherURL(cityKey))
  
  



// const getCityWeather = async cityName => {
//   try {
//     const { Key } = await getCityData(cityName)
//     const cityWeatherURL = `http://dataservice.accuweather.com/currentconditions/v1/${Key}?apikey=${APIKey}&language=pt-br`
//     const response = await fetch(cityWeatherURL)

//     if(!response.ok) {
//       throw new Error('Não foi possível obter os dados')
//     }

//     const [cityWeatherData] = await response.json()
//     return cityWeatherData
//   } catch ({name, message}) {
//     alert(`${name}: ${message}`)
//   }
// }

// getCityWeather('São Paulo')