const clock = document.querySelector(".clock");
const amPm = document.querySelector(".am__pm");
const container = document.querySelector(".container");



const timeRequired = 1000; //1000ms => date changes per 1s 


function showClock(){
	const body = document.body
	let now = new Date();
	let hour = now.getHours();
	let minute = now.getMinutes();
	let second = now.getSeconds();

	let ampm = hour <= 12 ? ampm = "AM" : AMPM = "PM";
	//let dayLight = hour <= 17 ? dayLight = "#afafaf" : dayLight = "#333333";
	
	
	
	clock.innerHTML = `${hour <= 12 ? "0"+ hour : hour}:${minute <= 9 ? "0" + minute : minute}:${second <= 9 ? "0" + second : second }`;
	amPm.textContent = ampm
	
	/*
	console.log("hour ", hour)
	console.log("minute ", minute)
	console.log("secondr ", second)
	  */
}


setInterval(showClock, timeRequired)