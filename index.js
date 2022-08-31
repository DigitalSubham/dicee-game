var player1 = Math.floor((Math.random() * 6) + 1);
var for_image1 = "dice"+player1+".png";
var image1= "images/"+for_image1;
var set_image1 = document.querySelectorAll("img")[0];
set_image1.setAttribute("src",image1);


var player2 = Math.floor((Math.random() * 6) + 1);
var for_image2 = "dice"+player2+".png";
var image2= "images/"+for_image2;
var set_image2 = document.querySelectorAll("img")[1];
set_image2.setAttribute("src",image2);


if (player1 > player2) {
    document.querySelector("h1").innerHTML= "🚩 Play 1 Wins!"
}
else if(player1 < player2) {
    document.querySelector("h1").innerHTML= "Player 2 Wins! 🚩"
}
else{
    document.querySelector("h1").innerHTML= "Draw!"
}
 

