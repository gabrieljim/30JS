const kick = new Audio("./sounds/606-kick1.wav");
const hihat = new Audio("./sounds/606-cymbal8.wav");
const snare = new Audio("./sounds/606-snare2.wav");
const crash = new Audio("./sounds/606-cymbal2.wav")
const tom1 = new Audio("./sounds/606-tom1.wav")
const tom2 = new Audio("./sounds/606-tom2.wav")
const tom3 = new Audio("./sounds/606-tom3.wav")

keys = {
	102:snare,
	103:snare,
	107:hihat,
	98:kick,
	110:kick,
	101:crash,
	114:tom1,
	116:tom1,
	115:tom2,
	100:tom2,
	104:tom3,
	106:tom3,
}

function audioThings(key) {
	var allDivs = document.getElementsByClassName("drumPart");
	for (let i = 0; i < allDivs.length; i++){
		allDivs[i].classList.remove("playing");
	}

	var divPressed = document.getElementById(key);
	divPressed.classList.add("playing");

	divPressed.addEventListener('transitionend',() => {
		divPressed.classList.remove("playing")
	});

	if (keys[key].paused) {
		keys[key].play();
	}
	else {
		keys[key].currentTime=0;
	}
}

function handleKey(event) {
	var key = event.charCode;
	if (!keys.hasOwnProperty(key)){
		return;
	}
	audioThings(key);
}
