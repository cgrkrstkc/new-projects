const menuItems = document.querySelectorAll(".menu__item");
const lightTheme = document.querySelector(".light__theme__container");

lightTheme.addEventListener("click", ()=> {
const body = document.body
body.classList.toggle("light__theme")
})

 
/* ----- for content of the text in console.log*/ 


menuItems.forEach((item,index) => {
	item.addEventListener("click", (e)=> {
	e.preventDefault();

	console.log(e.target.textContent.trim().toUpperCase())
	})
})