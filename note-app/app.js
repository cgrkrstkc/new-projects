

const createBtn = document.querySelector(".head__content button");

const noteContent = document.querySelector(".notes__content");




function updateStorage(){
	localStorage.setItem("notes", noteContent.innerHTML)
}
function getStorage(){
	noteContent.innerHTML = localStorage.getItem("notes")
}
 getStorage()

function createNotes(){
	let input = document.createElement("p")
	let img = document.createElement("img")
	
	input.className = "note";
	input.setAttribute("contenteditable","true");
	img.src = "rubbish-tin-icon.png";
	
	
	noteContent.appendChild(input).appendChild(img)
	updateStorage()
}



createBtn.addEventListener("click", createNotes)

noteContent.addEventListener("click", (e)=> {
	if(e.target.tagName === "IMG"){
		e.target.parentElement.remove();
		updateStorage()
	}
})

