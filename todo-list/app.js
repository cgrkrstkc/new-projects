
	
	
	
const clearAllBtn = document.querySelector(".clear__all");
const constituteTask = document.querySelector(".constitute__task");
const addBtn = document.querySelector(".add__btn");


const taskItems = document.querySelector(".task__items");




function addTask(e){
	e.preventDefault();
	let getLocalStorage = sessionStorage.getItem("New Todo");
	if(getLocalStorage === null){
		todoArray = [];
	}else{
	todoArray = JSON.parse(getLocalStorage)
	}
		let val = constituteTask.value.trim();
	if(val === ""){
		alert("Please type a task before you try to add!")
	}else{
		val = val.charAt(0).toUpperCase() + val.slice(1).toLowerCase();
		todoArray.push(val)
		sessionStorage.setItem("New Todo",JSON.stringify(todoArray))
	}
		showTask()
		addTask.value = "";
	
}

function showTask(){
	let getLocalStorage = sessionStorage.getItem("New Todo");
	if(getLocalStorage === null){
		 todoArray = [];
	}else{
		todoArray = JSON.parse(getLocalStorage)
	}	
		let taskHTML = "";
		
		todoArray.forEach( (val, index) => {
		
		taskHTML += `<div class="task__item">
						 <div class="task__content">
							<p class="task">${index+"\. "+val}</p>
						</div>			
						<img src="close-icon.png" onclick=removeTask(${index})>
					</div>`;
		})
			
		taskItems.innerHTML = taskHTML;
		constituteTask.value = "";
}


function removeTask(indx){
	
	let getLocalStorage = sessionStorage.getItem("New Todo");
	todoArray = JSON.parse(getLocalStorage);	
	todoArray.splice(indx,1)
	
	sessionStorage.setItem("New Todo", JSON.stringify(todoArray));
	showTask()
}



constituteTask.addEventListener("keyup", (e)=> {
	e.preventDefault();
	if(e.target.key === "Enter"){
		let getLocalStorage = sessionStorage.getItem("New Todo");
		if(getLocalStorage === null){
			todoArray = [];
		}else{
		todoArray = JSON.parse(getLocalStorage)
		}
			let val = constituteTask.value.trim();
		if(val === ""){
			alert("Please type a task before you try to add!")
		}else{
			val = val.charAt(0).toUpperCase() + val.slice(1).toLowerCase();
			todoArray.push(val)
			sessionStorage.setItem("New Todo",JSON.stringify(todoArray))
		}
	}else return;
			showTask()
})



  /*OPTIONAL*/
function clearAll(){
	if(todoArray.length === 0){
	alert("There is no task to clear")
	}
	todoArray.splice(0, todoArray.length)
	//todoArray.length = 0;
	sessionStorage.setItem("New Todo", JSON.stringify(todoArray))
	showTask()
	constituteTask.value = "";
}

addBtn.addEventListener("click", addTask)

clearAllBtn.addEventListener("click", clearAll)

 showTask()
