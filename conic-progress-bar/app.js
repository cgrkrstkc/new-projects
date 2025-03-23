const progressBar = document.querySelector(".progress__bar__content");
const body = document.body
const valueContainer = document.querySelector(".progress__bar__value ");




 console.log(progressBar, valueContainer)
	 
let progressValue = 0 // 0 / 100  %
let progressEnd = 10000 // 80 / 100  %
let speed = 50; // ms



const progress = setInterval( () => {
	progressValue++
	console.log(progressValue)
	
	valueContainer.textContent = `${progressValue}%`
	
	progressBar.style.background = `conic-gradient(		
			#666666 ${progressValue * 3.6}deg,
			#a4aaaa ${progressValue * 3.6}deg
			
		)`
		
	body.style.background = `conic-gradient(
			#666666 ${progressValue * 3.6}deg,  
			#a4aaaa ${progressValue * 3.6}deg
	)`
		if(progressValue >= 100){
			progressValue = 100
			valueContainer.textContent = `${progressValue}%`
			 clearInterval(progress)
		}
		if(progressValue === progressEnd){
			clearInterval(progress)	
		}
}, speed)