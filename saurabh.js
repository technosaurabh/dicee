
var numberone = Math.random();
numberone = (numberone*6)+1;
numberone = Math.floor(numberone);

var numbert = Math.random();
numbert = (numbert*6)+1;
numbert = Math.floor(numbert);

if(numberone > numbert){
	document.querySelector("h1").innerHTML = "player 1 wins";
	document.querySelector("h1").style.color="red";
}

else if(numberone < numbert){
	document.querySelector("h1").innerHTML = "player 2 wins";
	document.querySelector("h1").style.color="yellow";
} else{
	document.querySelector("h1").innerHTML = " oh bhai draw ho gaya!!!";
	document.querySelector("h1").style.color="blue";
}


if(numberone===1){
	document.querySelector("img").setAttribute("src", "images/dice1.png");
} else if(numberone ===2) {
	document.querySelector("img").setAttribute("src", "images/dice2.png");
} else if(numberone ===3){
	document.querySelector("img").setAttribute("src", "images/dice3.png");
} else if(numberone=== 4){
	document.querySelector("img").setAttribute("src", "images/dice4.png");
} else if(numberone ===5){
	document.querySelector("img").setAttribute("src", "images/dice5.png");
} else{
	document.querySelector("img").setAttribute("src", "images/dice6.png");
}

if(numbert===1){
	document.querySelector("img.img2").setAttribute("src", "images/dice1.png");
} else if(numbert===2){
	document.querySelector("img.img2").setAttribute("src", "images/dice2.png");
} else if(numbert===3){
	document.querySelector("img.img2").setAttribute("src", "images/dice3.png");
} else if(numbert ===4){
	document.querySelector("img.img2").setAttribute("src", "images/dice4.png");
}else if(numbert===5){
	document.querySelector("img.img2").setAttribute("src", "images/dice5.png");
}else{
	document.querySelector("img.img2").setAttribute("src", "images/dice6.png");
}

