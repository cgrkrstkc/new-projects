 const coinPrices = document.querySelectorAll(".crypto__info h4")
 const coinNames = document.querySelectorAll(".crypto__info p")
 
 const refreshPrices = document.querySelector(".refresh__prices")
 
 const btc = document.querySelector(".bitcoin")
 const eth = document.querySelector(".ethereum")
 const doge = document.querySelector(".dogecoin")






window.addEventListener("DOMContentLoaded", getCoins)



async function getCoins(){
const APIKEY = "8cf5ac5621c8d0266298a149e49d7514";
const url = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd`;

//const coins = ["bitcoin","ethereum","dogecoin"]

const options = {
				method: 'GET', 
				headers: {
					accept: 'application/json'
					}
			};

	await fetch(url , options)                                       
  .then(res => res.json())
  .then(data =>  {

		let text = Object.keys(data)
		
		
		coinPrices.forEach((price,index) => {
		price.textContent = `${"$"+data[text[index]].usd}`
		
		
		coinNames[index].textContent = text[index].charAt(0).toUpperCase() + text[index].slice(1);
		
		console.log(text)
		
		
		console.log(data[text[index]].usd)
		
	})
		


		//console.log(data)
  })
  .catch(err => console.error(err));
}

		 
		 /*btc.textContent = `${"$"+data.bitcoin.usd}`
		 eth.textContent = `${"$"+data.ethereum.usd}`
		 doge.textContent = `${"$"+data.dogecoin.usd}`*/
		 
		 
		 
 

refreshPrices.addEventListener("click", getCoins)