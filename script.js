function makeid(l) {
  let res="";
		let rand="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
	for(let i=0;i<l;i++){
		res=res+rand.charAt(Math.floor(
			Math.random()*rand.length;
		)
	  )	
	}
}

Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
