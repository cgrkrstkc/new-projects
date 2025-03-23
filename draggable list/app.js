

const openPageBtns = document.querySelectorAll("ul li span");
const sublists = document.querySelectorAll("ul li .sublist");
const clickSound = document.querySelector(".mouse__click");







function openPage(index){
		sublists[index].classList.toggle("show");
		clickSound.play()
		
}

openPageBtns.forEach((openPageBtn,index) => {
	openPageBtn.addEventListener("click", (e)=> {
		e.preventDefault();
		openPage(index);
		openPageBtn.classList.toggle("show")
		clickSound.play();
	})
})