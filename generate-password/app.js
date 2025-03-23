const generateBtn = document.querySelector(".btn__item");
const copy = document.querySelector(".input__item img");
const copied = document.querySelector(".copied");
const valueInput = document.querySelector(".input__item input");


const ascii_letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
const ascii_lowercase = 'abcdefghijklmnopqrstuvwxyz'
const ascii_uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const digits = '0123456789'
const hexdigits = '0123456789abcdefABCDEF'
const octdigits = '01234567'
const printable = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
const punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
const whitespace = ' \t\n\r\x0b\x0c'



const passwordLength = Number(16);

// PASSWORD GENERATOR BEGINS
const generatePassword = () => {
valueInput.value = "";
let newPassword = "";
	for (let i=1; i < passwordLength + 1; i++){
		let value = Math.floor(Math.random() * printable.length)
		newPassword += String(printable[value])
	}
	return showPassword(newPassword);
}


 function showPassword(show){
	 valueInput.value = show;
	 let val = valueInput
	 return val
 }
 
generateBtn.addEventListener("click", generatePassword);

 //PASSWORD GENERATOR ENDS
 

 
 
 
 //COPY PASSWORD BEGINS
 
 function removeCopyBoard(){
	copied.classList.remove("show");	
 }
 
 function clearInput() {	
	valueInput.value = "";
 }
 
 function copyPassword(){
 let copyValue = valueInput.value
	navigator.clipboard.writeText(copyValue)
	copied.innerHTML = `PASSWORD COPIED >>> ${copyValue}`
	copied.classList.add("show");
	setTimeout(removeCopyBoard, 2000);
	setTimeout(clearInput, 10000);
 }
 
 
copy.addEventListener("click", copyPassword);


//COPY PASSWORD ENDS