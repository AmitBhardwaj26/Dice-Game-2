
var number1=Math.random()*6;
number1=Math.floor(number1)+1;
var imag;
switch (number1) {
    case 1:imag="images/dice1.png";
    break;
    case 2:imag="images/dice2.png";
      break;
    case 3:imag="images/dice3.png";
        break;
    case 4:imag="images/dice4.png";
          break;
    case 5:imag="images/dice5.png";
            break;
    case 6:imag="images/dice6.png";


}

document.querySelector(".img1").setAttribute("src",imag);
 number2=Math.random()*6;

number2=Math.floor(number2)+1;
 imag;
switch (number2) {
    case 1:imag="images/dice1.png";
    break;
    case 2:imag="images/dice2.png";
      break;
    case 3:imag="images/dice3.png";
        break;
    case 4:imag="images/dice4.png";
          break;
    case 5:imag="images/dice5.png";
            break;
    case 6:imag="images/dice6.png";


}

document.querySelector(".img2").setAttribute("src",imag); number=Math.random()*6;
var winner;
if(number1>number2)
winner = "🏆Player 1 Wins";
else if(number1<number2)
winner =" Player 2 Wins🏆";
else winner = " Draw !";
document.querySelector("h1").innerHTML=winner;
