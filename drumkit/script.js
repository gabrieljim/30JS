function audioThings(key) {
	var audio = document.getElementById(key);
	var div = document.getElementById(`k${key}`);
	div.classList.add("playing");
	setTimeout(() => div.classList.remove("playing"), 50);
	console.log(div.classList);

	if (audio.paused) {
		audio.play();
	}
	else {
		audio.currentTime=0;
	}
}

function handleKey(event) {
	console.log(event.charCode);
	var key = event.charCode;
	audioThings(key);
}
