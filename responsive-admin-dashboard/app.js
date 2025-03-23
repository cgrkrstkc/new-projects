

const modes = document.querySelectorAll(".left__img__item img");
const mainPage = document.querySelector(".main__page__container");
const navbar = document.querySelector(".navbar");

const navbarImg = document.querySelector(".img__container img");

const hamburgerMenuBtn = document.querySelector(".hamburger__container");
const exitMobileBtn = document.querySelector(".exit__btn");
const mobileMenu = document.querySelector(".left__main__page");





modes.forEach(mode => {
	mode.addEventListener("click" , ()=> {
		if(mode.classList.contains("mode__light")){
			document.body.classList.remove("dark")
			mode.classList.remove("show__bottom__border");
			navbarImg.classList.remove("show__bottom__border");
		}else if(mode.classList.contains("mode__dark")){
			document.body.classList.add("dark")
			
			modes.forEach( mode => {
				mode.classList.add("show__bottom__border");
				navbarImg.classList.add("show__bottom__border");
				
			})
		}
	})
})


function showMobileMenu(){
  mobileMenu.classList.add("show");
  exitMobileBtn.classList.toggle("show");
}
function closeMobileMenu(){
  mobileMenu.classList.remove("show");
  exitMobileBtn.classList.toggle("show");
}



hamburgerMenuBtn.addEventListener("click", showMobileMenu)

exitMobileBtn.addEventListener("click", closeMobileMenu)