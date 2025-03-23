const progressBars = document.querySelectorAll(".linear__progress__group");
const percentageValues = document.querySelectorAll(".linear__value");

let firstValue = 0;
let lastValue = 100
let speed = 50;
let indx = 5;

let colors = {
			backgroundColor1: "crimson",
			backgroundColor2: "#29296c",
			backgroundColor3: "#3c3739",
			backgroundColor4: "#45d745"
}
let randomList = [];

function randomProgress(){
	//let randomValue = math.floor(Math.random() * progressBars.length)
	let randomValue = Math.floor(Math.random() * 101)
	return randomValue
}

	

		
function shape(){
	percentageValues.forEach((value) => {
	
	let random = randomProgress()
		
		value.textContent = `${random}%`;
		randomList.push(random)
		
	})
	progressBars.forEach((bar, ind) => {

			bar.style.width = `${randomList[ind]}%`
			bar.style.backgroundColor = colors[`backgroundColor${ind+1}`]

		})	

		
}
setTimeout(shape, speed)