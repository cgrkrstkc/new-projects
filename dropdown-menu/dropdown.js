

const loading = document.querySelector(".loading");
const verticalLoading = document.querySelector(".vertical__loading");


let end = 46;
let speed = 0;

/*

const percentage = setInterval( ()=> {
	initial++
	console.log(initial)
	
	loading.innerHTML = `${initial}%`
	loading.style.width = `${initial}%`
	
	if(initial === end){
		clearInterval(percentage)
	}
	if(initial >= 100){
	initial = 100
	loading.innerHTML = `${initial}%`
	loading.style.width = `${initial}%`
		clearInterval(percentage)
	}
}, speed)

 */
 
/* ----  RANDOM  percentage----*/

function randomGenerate(){
let rand = Number(Math.floor(Math.random() * 100))
return rand
}


const percentage1 = setInterval( ()=> {
	let initial = 0;
	
	
	loading.innerHTML = `${initial}%`
	loading.style.width = `${initial}%`
	
	initial++
	
	if(initial === randomGenerate()){
	initial = randomGenerate()
	loading.innerHTML = `${initial}%`
	loading.style.width = `${initial}%`
		clearInterval(percentage1)
	
	}else if(initial >= 100){
	initial = 100
	loading.innerHTML = `${initial}%`
	loading.style.width = `${initial}%`
		clearInterval(percentage1)
	}
	console.log(initial)
}, speed)

 const percentage2 = setInterval( ()=> {
	let initial1 = 0;
	
	
	verticalLoading.innerHTML = `${initial1}%`
	verticalLoading.style.height = `${initial1}%`
	
	initial1++
	
	if(initial1 === randomGenerate()){
	initial1 = randomGenerate()
	verticalLoading.innerHTML = `${initial1}%`
	verticalLoading.style.width = `${initial1}%`
		clearInterval(percentage2)
	
	}else if(initial1 >= 100){
	initial1 = 100
	verticalLoading.innerHTML = `${initial1}%`
	verticalLoading.style.width = `${initial1}%`
		clearInterval(percentage2)
	}
	console.log(initial1)
}, speed)
 
  
/*
function percentage(){
 initial++
	console.log(initial)
	
	loading.innerHTML = `${initial}%`
	loading.style.width = `${initial}%`
	
	if(initial === end){
		clearInterval(percentage)
	}
	if(initial >= 100){
	initial = 100
	loading.innerHTML = `${initial}%`
	loading.style.width = `${initial}%`
		clearInterval(percentage)
	}
}

setInterval(percentage, speed)
*/



/*----- FLUSHING BUBBLES----*/



function generateRandomAndWidthHeight(){
	const rand = Math.floor(Math.random() * flashing__bubbles.length)
	return rand;
}



const flashingBubbles = document.querySelectorAll(".flashing__bubbles span")

let click = 0; 

function runBubble(){
 flashingBubbles.forEach( bubble => {
	 
	 const widthheight = Math.floor((Math.random() * 100))

	 bubble.style.width = widthheight+"px";
	 bubble.style.height = widthheight+"px";
	 bubble.addEventListener("click", ()=> {
		bubble.style.display= "none";
		click++;
		console.log("click: "+ click)
	 })
})
}

runBubble();


/*

.circular__percentage{
top:25%;
left: 10%;
width: 85px;
height: 85px;
background-color: white;
border: 4px solid brown;
border-radius: 50%;
}
.circular__percentage span:first-child{
	position: absolute;
	width: 65px;
	height: 65px;
	background-color: brown;
	animation: circularPercentage 6s linear infinite;
}


.circular__percentage span:last-child{

	position: absolute;
	width: 85px;
	height: 85px;
	background: linear-gradient(#302d2d, #fafafa);
	animation:   circularPercentage 3s linear infinite;
	z-index: -5;
	animation-delay: 2s;	
}


@keyframes circularPercentage {
	0%{
	background: linear-gradient(#302d2d, #fafafa);
	   transform: rotate(0deg);
	}

	100%{
	background: linear-gradient(#fafafa, #302d2d);
	transform: rotate(360deg);
	}
	50%{
	background: linear-gradient(#fafafa, #302d2d);
	transform: rotate(0deg);
	}
	0%{
	background: linear-gradient(#fafafa,#302d2d );
	   transform: rotate(0deg);
	}
}	

*/