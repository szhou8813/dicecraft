var newImg;
var diceImages = [];
var depositImgLoaded = false;

for (var i=0; i<9; i++) {
	newImg = new Image();
	newImg.src = "images/dice" + i.toString() + ".png";
	diceImages.push(newImg);
}

var depositImg = new Image();

depositImg.src = "images/deposit.png";
