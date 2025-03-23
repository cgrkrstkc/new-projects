





	const hourHandle = document.querySelector(".hour")
	const minuteHandle = document.querySelector(".minute")
	const secondHandle = document.querySelector(".second")	
	
	const AMPM = document.querySelector(".am__pm")	

	
setInterval( ()=> {
	const date = new Date();
	 
	const secondRatio = date.getSeconds() / 60;
	console.log("second",secondRatio)
	const minuteRatio = (secondRatio + date.getMinutes()) / 60;
	console.log("minute",minuteRatio)
	const hourRatio = (minuteRatio + date.getHours()) / 12;
	console.log("hour",hourRatio)
	
	 AMPM.textContent = date.getHours() > 12 ? "PM" : "AM"
	
	hourHandle.style.transform = `rotate(${hourRatio * 360}deg)`
	minuteHandle.style.transform = `rotate(${minuteRatio * 360}deg)`
	secondHandle.style.transform = `rotate(${secondRatio * 360}deg)`
}, 1000);	


