

const items = document.querySelectorAll(".item");

const left = document.querySelector(".left");
const right = document.querySelector(".right");


for(item of items){
	item.addEventListener("dragstart", (e)=> {
		let selected = e.target;

		console.log(e.target)
			
		right.addEventListener("dragover", (e)=> {
			e.preventDefault();
		})
		right.addEventListener("drop", (e)=> {
			right.append(selected)
			selected = "";
		})
		left.addEventListener("dragover", (e)=> {
			e.preventDefault();
		})
		left.addEventListener("drop", (e)=> {
			left.append(selected);
			selected = "";
		})
	})
}