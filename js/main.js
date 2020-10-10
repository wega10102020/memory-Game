
// Get Span
document.querySelector(".control-button span").onclick = function(){
	// Prompt Window To Ask For Name 
	let yourName = prompt("Enter Your Name");
	// If Name Is Empty
	if(yourName == null || yourName == ""){
		document.querySelector(".left span").innerHTML = "Unknown";
	// Name Is Not Empty
	}else{
		// Set Name To Your Name
		document.querySelector(".left span").innerHTML = yourName;
	}
	// Remove Page From Screen
	document.querySelector(".control-button").remove();
}
// Effect Duration
let duration = 1000;

// Select Blocks Container
let allImg = document.querySelector(".all-img");

// Create Array From Game Block
let boxImg = Array.from(allImg.children);

// Create Range Of Keys
let orderRange = [...Array(boxImg.length).keys()];
shuffle(orderRange);
// Add Order Css Property To Game Blocks

boxImg.forEach((bk,index) => {
	bk.style.order = orderRange[index];

	// Add Click Event
	bk.addEventListener("click",function(){
		flip(bk);
	})
});

function flip(select){
	select.classList.add("flip");

	// Collect All Fliped Card
	let allFliped = boxImg.filter(flipedBlock => flipedBlock.classList.contains("flip"));

	if(allFliped.length === 2){
		// Stop Clicking Function
		stopClick();

		checkMatched(allFliped[0],allFliped[1]);
	}
}

// Check Matched Block
function checkMatched(first,second){
	let tries = document.querySelector(".right span");
	if(first.dataset.img === second.dataset.img){
		document.getElementById("success").play()
		first.classList.remove("flip");
		second.classList.remove("flip");

		first.classList.add("match");
		second.classList.add("match");
	}else{
		tries.innerHTML = parseInt(tries.innerHTML) + 1;
		setTimeout(() =>{
			first.classList.remove("flip");
			second.classList.remove("flip");
		},duration);
		document.getElementById("fail").play();	
	}
}



// Shuffle Function
function shuffle(array){
	// Setting Vars
	let current = array.length,
		temp,
		random;
	while (current > 0){
		// get Random Number
		random = Math.floor(Math.random() * current);

		// Decrease Length
		current--;
		// Swap Vars
		[array[current], array[random]] = [array[random], array[current]];
	}
	return array;
}


		// Stop Clicking Function

	function stopClick(){
		// Add Class No Clicking On Main Container
		allImg.classList.add("clicking");

		setTimeout(()=>{
			// Remove Class No Clicking After Duration
			allImg.classList.remove("clicking");
			

		},duration);
	}


