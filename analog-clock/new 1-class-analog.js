



	
class AnalogClock{
	
	hourHandle = document.querySelector(".hour")
	minuteHandle = document.querySelector(".minute")
	secondHandle = document.querySelector(".second")
	
	date = new Date();
	 
	hour = this.date.getHours();
	minute = this.date.getMinutes();
	second = this.date.getSeconds();
	
	handleDegree(){
		const hourDegree = hour * 30
		console.log(hourDegree)
		
		const minDegree =  minute * 6
		console.log(minDegree)
		
		const secondDegree = second * 6
		console.log(secondDegree)
		
		return [hourDegree, minDegree, secondDegree];
	}
	
	showClock(){
		 const [hourDeg, minuteDeg, secondDeg] = this.handleDegree();
		 
		hourHandle.style.transform = `rotate(${hourDeg}deg)`
		minuteHandle.style.transform = `rotate(${minuteDeg}deg)`
		secondHandle.style.transform = `rotate(${secondDeg}deg)`
	
	}
}

const analog = new AnalogClock();
etInterval(analog,1000)
console.log(analog.showClock);
