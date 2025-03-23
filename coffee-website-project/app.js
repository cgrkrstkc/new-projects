
const navContainer = document.querySelector(".nav__container");


const testimonial__container = document.querySelector(".testimonial__container");
const testimonialItems = document.querySelector(".testimonial__items");

const testimonialImages = document.querySelectorAll(".testimonial__item");
const arrows = document.querySelectorAll(".arrow__group img");



const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile__menu");
const mobileMenuHamburger = document.querySelector(".mobile__hamburger");


const mobileListLinks = document.querySelectorAll(".mobile__item__list .list");

const arrowUp = document.querySelector(".arrow__up");





 //MOBILE LIST HAMBURGER MENU WHEN CLICKED

function showMobileMenu(){
   mobileMenu.classList.toggle("show")
   document.body.style.userSelect = "none";

}
function hideMobileMenu(){
   mobileMenu.classList.toggle("show")

}


hamburger.addEventListener("click", showMobileMenu)

mobileMenuHamburger.addEventListener("click", hideMobileMenu)


//MOBILE LIST MENU DİSPLAY:NONE WHEN CLICKED


mobileListLinks.forEach(link1 => {
link1.addEventListener("click", () => {
   mobileMenu.classList.toggle("show")
})
})

if(arrowUp){
arrowUp.addEventListener("click", () => {
	window.scrollTo(0,0);
})

}



window.addEventListener("scroll", (e)=> {
	let scroll_position = window.scrollY
	if(scroll_position > 650){
		navContainer.style.boxShadow = "0px 0px 15px #000000"
	}else{
		navContainer.style.boxShadow = "none"
	}
})

window.addEventListener("scroll", (e)=> {
	let scroll_position = window.scrollY
	if(scroll_position > 700){
		arrowUp.classList.add("show")
	}else{
		arrowUp.classList.remove("show")
	}
})



const imgs = Array.from(testimonialImages)


arrows.forEach( arrow => {
	arrow.addEventListener("click", (e) => {
	e.preventDefault();
	if (arrow.classList.contains("left__arrow")){
	   testimonialItems.scrollLeft -= 220
	   testimonialItems.style.scrollBehavior = "smooth";
	}
	else if(arrow.classList.contains("right__arrow")){
	  testimonialItems.scrollLeft += 220
	  testimonialItems.style.scrollBehavior = "smooth";
	}
	})
})


testimonialItems.addEventListener("wheel", (e) => {
	e.preventDefault();
	testimonialItems.scrollLeft += e.deltaY
	testimonialItems.style.scrollBehavior = "smooth";	
})


arrowUp.addEventListener("mouseover", () => {
	arrowUp.style.transform = "scale(1.1)";
})
arrowUp.addEventListener("mouseout", () => {
	arrowUp.style.transform = "scale(1)";
})