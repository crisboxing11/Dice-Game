let randomNumber1 = Math.floor(Math.random() * 6) +1; //1-6
let randomNumber2 = Math.floor(Math.random() * 6) +1
let randomDiceImage = "dice" + randomNumber1 + ".png" //dice1.ping - dice6.png
let randomDiceImage2 = "dice" + randomNumber2 + ".png"
let randomImageSource = "Images/" + randomDiceImage;
let randomImageSource2 = "Images/" + randomDiceImage2;

let image1 = document.querySelector(".img1").setAttribute("src",randomImageSource);
let image2 = document.querySelector(".img2").setAttribute("src",randomImageSource2);

if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!😉"
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!😜"
} else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "It's a tie!💩"
}