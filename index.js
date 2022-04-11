//first dice generating random number1
let number1=Math.random()*6;
number1=Math.floor(number1)+1;
var imag="images/dice"+number1+".png";

document.querySelector(".img1").setAttribute("src",imag);

// second dice generating random number2
number2=Math.random()*6;
number2=Math.floor(number2)+1;
imag="images/dice"+number2+".png";

document.querySelector(".img2").setAttribute("src",imag);

// decide winner on the basis of two numbers
let winner;
if(number1>number2)       winner = "🏆Player 1 Wins";

else if(number1<number2)  winner =" Player 2 Wins🏆";

else winner = " Draw !";

document.querySelector("h1").innerHTML=winner;
