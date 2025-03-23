


const asteriks = document.querySelectorAll("form .input__group label span");
const inputValues = document.querySelectorAll(".input__group input");
const warningPrompts = document.querySelectorAll(".input__group .warning");

const validForm = document.querySelector("form");
const submitBtn = document.querySelector(".submit__btn");





	
 
 validationList = [];
 
function sendForm(){

 validationInfos = {
 
	name: null,
	surname: null,
	email: null,
	password1: null,
	password2: null
 }
	
	const names = Object.keys(validationInfos);

	inputValues.forEach( (val, index) => { 	
		if(!inputValues[index].value){
			warningPrompts[index].classList.add("show")
			setTimeout(()=>{
			 warningPrompts[index].classList.remove("show")
			}, 10000)
		}else{ 
			
			warningPrompts[index].classList.remove("show")
			asteriks[index].style.color = "lightgreen";
			
			validationInfos[names[index]] = inputValues[index].value;
	
		}
		if(!inputValues[index].value){
			return;
		}
			
	})
		
		if(inputValues[inputValues.length - 2].value != inputValues[inputValues.length - 1].value){
			inputValues[inputValues.length - 2].value = "";
			inputValues[inputValues.length - 1].value = "";
			asteriks[asteriks.length - 2].style.color = "tomato";
			asteriks[asteriks.length - 1].style.color = "tomato";
			warningPrompts[warningPrompts.length - 2].textContent = "Passwords are not same";
			warningPrompts[warningPrompts.length - 1].textContent = "Passwords are not same";
			warningPrompts[warningPrompts.length - 2].classList.add("show")
			warningPrompts[warningPrompts.length - 1].classList.add("show")

			
		}else{
			inputValues.forEach( (val,index) => {
				val.value = "";
				asteriks[index].style.color = "tomato";
		})
		}

		validationList.push(validationInfos);
		
		console.log(validationInfos);
		console.log("validationList ", validationList);
		console.log("validationListLength ", validationList.length);
}	




submitBtn.addEventListener("subm", (e)=> {
	e.preventDefault();
	sendForm();
})
submitBtn.addEventListener("click", (e)=> {
	e.preventDefault();
	sendForm();
})

validForm.addEventListener("keyup", (e)=> {
	e.preventDefault();
	if(e.target.key === "Enter"){
	sendForm();
	}else return;
})




inputValues.forEach( (input,index) => {
	input.addEventListener("input", (e)=> {
	e.preventDefault();
	if(input.value){
		warningPrompts[index].classList.remove("show")
		asteriks[index].style.color = "lightgreen";
	}else {
		asteriks[index].style.color = "tomato";
		warningPrompts[index].classList.add("show")
		
		setTimeout(()=>{
		 warningPrompts[index].classList.remove("show")
		}, 10000)
	}
	})
})