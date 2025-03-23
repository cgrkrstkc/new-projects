const urlInput = document.querySelector(".url__input");

const qrScreen = document.querySelector(".qr__screen");
const qrImage = document.querySelector(".image");



const generateQrBtn = document.querySelector(".btn");

 



const qrGenerator = () => {
	const val = urlInput.value
	const url =  `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${val}`;
	
	if(val.length > 0){
		qrImage.src = url
		qrScreen.classList.add("show");
	}
		
 }
 
 generateQrBtn.addEventListener("mouseover", qrGenerator);
 
 



								

