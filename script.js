//your JS code here. If required.
let counter = document.getElementById("counter");
let btn = document.getElementById("incrementBtn");

btn.addEventListener("click", () =>{
	let val = parseInt(counter.innerText);
	alert(val);
	val = val+1;
	counter.innerText = val;
})
