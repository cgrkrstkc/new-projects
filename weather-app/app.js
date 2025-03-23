
const weatherHero = document.querySelector(".weather_hero");

const mainContainer = document.querySelector(".main__container");

const popUpLeft = document.querySelector(".pop__up__container");
const popUpHero = document.querySelector(".pop__up__hero__container");

const header = document.querySelector("header");

const form1 = document.querySelector("form");

const inputValue = document.querySelector(".value");
const magnifier = document.querySelector(".magnifier");

const searchBtn = document.querySelector(".search");

const locationBtn = document.querySelector(".location");


const city = document.querySelector(".city");
const sunrise = document.querySelector(".sunrise");
const sunset = document.querySelector(".sunset");

const headerIcon = document.querySelector(".header__icon__item img");


const weather = document.querySelector(".weather");
const sky = document.querySelector(".sky");

const cityName = document.querySelector(".city__name");
const cityNameCountry = document.querySelector(".city__name .country__name");

const temp = document.querySelector(".temp");
const tempMax = document.querySelector(".temp__max");
const tempMin = document.querySelector(".temp__min");

const feelsLike = document.querySelector(".feels__like");
const humidity = document.querySelector(".humidity");
const pressure = document.querySelector(".pressure");
const groundLevel = document.querySelector(".ground__level");
const seaLevel = document.querySelector(".sea__level");


const windSpeed = document.querySelector(".speed");
const windegree = document.querySelector(".degree");

const longitude = document.querySelector(".longitude");
const latitude = document.querySelector(".latitude");


function fetchWeather(){
   let val = inputValue.value.trim().toLowerCase()
		if(!val){
			alert("Please type a value...")
		}else{
			getFetch(val)
		}
}

async function getFetch(valUE){

const options = {
	method: "GET",
	headers: {
		accept: "application/json"
	}
}

const APIKEY = "8cf5ac5621c8d0266298a149e49d7514";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${valUE}&appid=${APIKEY}`;



	  try {
		let response = await fetch(url, options)
		let status1 = response.ok ? true : false;
		if(status1){		
			let data = await response.json()
			console.log(data)
			writeHtmlData(data)
		}else {
		notFound()
		console.log("The data you are looking for couldn't be found")
		}
	  }
	  catch(error){             
	  console.log({
		  error: error.name,
		  error: error.message
	  }) 
	}
	  finally {
		console.log("succesfully conducted")
	  }
}

function writeHtmlData(data1){

	city.textContent = "City: " + data1.name.endsWith("Province") ?"City: " + data1.name.split(" ").shift().toUpperCase() : "City : " + data1.name.toUpperCase()
	sunrise.textContent = "Sunrise: " + new Date(data1.sys.sunrise).getHours() + "':" + new Date(data1.sys.sunrise).getMinutes()+"''"
	sunset.textContent = "Sunset: " + new Date(data1.sys.sunset).getHours() + "':" + new Date(data1.sys.sunset).getMinutes()+"''"
	
	headerIcon.textContent = data1.weather[0].icon
	
	weather.textContent = "Weather: " + data1.weather[0].main
	sky.textContent = "Sky: " + data1.weather[0].description
	humidity.textContent = "Humidity: " + data1.main.humidity
	
	temp.textContent = (data1.main.temp - 272.15).toFixed() + " C°"
	cityName.textContent = data1.name.endsWith("Province") ? data1.name.split(" ").shift() : data1.name+", " +data1.sys.country
	//cityNameCountry.textContent = ``
	
	feelsLike.textContent = "Feels Like: " + (data1.main.feels_like - 272.15).toFixed(1) + " C°"
	tempMax.textContent = "Max Temperature: " + (data1.main.temp_max - 272.15).toFixed(1) + " C°"
	tempMin.textContent = "Min Temperature: " + (data1.main.temp_min - 272.15).toFixed(1) + " C°"
	
	pressure.textContent = "Pressure: " + data1.main.pressure  + " Bar"
	groundLevel.textContent = "Ground: " + data1.main.grnd_level + " m"
	seaLevel.textContent = "Sea Level: " + data1.main.sea_level  + " m"
	
	windSpeed.textContent = "Wind Speed: " + data1.wind.speed + " km"
	windegree.textContent = "Wind Degree: " + data1.wind.deg  + "°"+ " deg" 
	
	
	longitude.textContent = "Longitude: " + data1.coord.lon  + "°"
	latitude.textContent = "Latitude: " + data1.coord.lat    + "°"
	
	mainContainer.classList.add("show");
	
	inputValue.value = "";
	
}

 function notFound(){
	const couldntFind = document.createElement("p")
	couldntFind.setAttribute("class", "couldntFind")
	couldntFind.innerHTML = "The City or Country you are looking for not found."
	mainContainer.classList.remove("show")
	header.appendChild(couldntFind)
	
	setTimeout(removeNotFound,2000)
	
 }
 
 function removeNotFound(){
		header.removeChild(header.lastChild)
		inputValue.value= "";
 }

	
function showWeatherApp(){
	   weatherHero.classList.add("show");
		popUpLeft.classList.add("remove");
		popUpHero.classList.add("show");
}	
function showPopUpLeft(){
	   weatherHero.classList.remove("show");
		popUpLeft.classList.remove("remove");
		popUpHero.classList.remove("show");
}	

popUpLeft.addEventListener("click", showWeatherApp)
popUpHero.addEventListener("click", showPopUpLeft)

searchBtn.addEventListener("click", fetchWeather)
magnifier.addEventListener("click", fetchWeather)


 inputValue.addEventListener("input", (e)=> {
 e.preventDefault()
	mainContainer.classList.remove("show")
	
 })
 
 inputValue.addEventListener("keyup", (e)=> {
  e.preventDefault()
if(e.key === "Enter"){    //Enter keycode
	fetchWeather()
 }else return
 }); 

