var flag = Math.floor(Math.random() * 2);
if(flag==1)

{
    document.getElementById("choice").innerHTML="[Player 1 :- X Player 2 :-O]";
}
else
{
    document.getElementById("choice").innerHTML="[Player 1 :- O Player 2 :-X]";
}


function choiceB1()
{
    if(flag==1)
    {
        document.getElementById("b1").value = "X";
        document.getElementById("b1").disabled = true;
        flag = 0; 
        document.getElementById("sound4").play()
    }
        else if(flag==0)
        {
            document.getElementById("b1").value = "O";
            document.getElementById("b1").disabled = true;
            flag = 1; 
            document.getElementById("sound3").play()
        }

}
function choiceB2()
{
    if(flag==1)
    {
        document.getElementById("b2").value = "X";
        document.getElementById("b2").disabled = true;
        flag = 0; 
        document.getElementById("sound4").play()
    }
        else if(flag==0)
        {
            document.getElementById("b2").value = "O";
            document.getElementById("b2").disabled = true;
            flag = 1; 
            document.getElementById("sound3").play()
        }

}
function choiceB3()
{
    if(flag==1)
    {
        document.getElementById("b3").value = "X";
        document.getElementById("b3").disabled = true;
        flag = 0; 
        document.getElementById("sound4").play()
    }
        else if(flag==0)
        {
            document.getElementById("b3").value = "O";
            document.getElementById("b3").disabled = true;
            flag = 1; 
            document.getElementById("sound3").play()
        }

}
function choiceB4()
{
    if(flag==1)
    {
        document.getElementById("b4").value = "X";
        document.getElementById("b4").disabled = true;
        flag = 0; 
        document.getElementById("sound4").play()
    }
        else if(flag==0)
        {
            document.getElementById("b4").value = "O";
            document.getElementById("b4").disabled = true;
            flag = 1;
            document.getElementById("sound3").play() 
        }

}
function choiceB5()
{
    if(flag==1)
    {
        document.getElementById("b5").value = "X";
        document.getElementById("b5").disabled = true;
        flag = 0; 
        document.getElementById("sound4").play()
    }
        else if(flag==0)
        {
            document.getElementById("b5").value = "O";
            document.getElementById("b5").disabled = true;
            flag = 1; 
            document.getElementById("sound3").play()
        }

}
function choiceB6()
{
    if(flag==1)
    {
        document.getElementById("b6").value = "X";
        document.getElementById("b6").disabled = true;
        flag = 0; 
        document.getElementById("sound4").play()
    }
        else if(flag==0)
        {
            document.getElementById("b6").value = "O";
            document.getElementById("b6").disabled = true;
            flag = 1; 
            document.getElementById("sound3").play()
        }

}
function choiceB7()
{
    if(flag==1)
    {
        document.getElementById("b7").value = "X";
        document.getElementById("b7").disabled = true;
        flag = 0; 
        document.getElementById("sound4").play()
    }
        else if(flag==0)
        {
            document.getElementById("b7").value = "O";
            document.getElementById("b7").disabled = true;
            flag = 1; 
            document.getElementById("sound3").play()
        }

}
function choiceB8()
{
    if(flag==1)
    {
        document.getElementById("b8").value = "X";
        document.getElementById("b8").disabled = true;
        flag = 0; 
        document.getElementById("sound4").play()
    }
        else if(flag==0)
        {
            document.getElementById("b8").value = "O";
            document.getElementById("b8").disabled = true;
            flag = 1; 
            document.getElementById("sound3").play()
        }

}
function choiceB9()
{
    if(flag==1)
    {
        document.getElementById("b9").value = "X";
        document.getElementById("b9").disabled = true;
        flag = 0; 
        document.getElementById("sound4").play()
    }
        else if(flag==0)
        {
            document.getElementById("b9").value = "O";
            document.getElementById("b9").disabled = true;
            flag = 1; 
            document.getElementById("sound3").play()
        }

} 
function winCase()
{
    var voice1 = document.getElementById("sound1");
    var voice2 = document.getElementById("sound2");
    var b1 = document.getElementById("b1").value;
var b2 = document.getElementById("b2").value;
var b3 = document.getElementById("b3").value;
var b4 = document.getElementById("b4").value;
var b5 = document.getElementById("b5").value;
var b6 = document.getElementById("b6").value;
var b7 = document.getElementById("b7").value;
var b8 = document.getElementById("b8").value;
var b9 = document.getElementById("b9").value;

var b1Clk = document.getElementById("b1");
var b2Clk = document.getElementById("b2");
var b3Clk = document.getElementById("b3");
var b4Clk = document.getElementById("b4");
var b5Clk = document.getElementById("b5");
var b6Clk = document.getElementById("b6");
var b7Clk = document.getElementById("b7");
var b8Clk = document.getElementById("b8");
var b9Clk = document.getElementById("b9");
     if((b1=="X")&&(b2=="X")&&(b3=="X"))
    {
        document.getElementById("b4").disabled=true;
        document.getElementById("b5").disabled=true;
        document.getElementById("b6").disabled=true;
        document.getElementById("b7").disabled=true;
        document.getElementById("b8").disabled=true;
        document.getElementById("b9").disabled=true;
        document.getElementById("b1").style.color = "red";
        document.getElementById("b2").style.color = "red";
        document.getElementById("b3").style.color = "red";
        document.getElementById("winmsg").innerHTML="Player X won";
        voice1.play()

    }
    else if((b4=="X")&&(b5=="X")&&(b6=="X"))
    {
        document.getElementById("b1").disabled=true;
        document.getElementById("b2").disabled=true;
        document.getElementById("b3").disabled=true;
        document.getElementById("b7").disabled=true;
        document.getElementById("b8").disabled=true;
        document.getElementById("b9").disabled=true;
        document.getElementById("b4").style.color = "red";
        document.getElementById("b5").style.color = "red";
        document.getElementById("b6").style.color = "red";
        document.getElementById("winmsg").innerHTML="Player X won";
        voice1.play()

    }
    else if((b7=="X")&&(b8=="X")&&(b9=="X"))
    {
        document.getElementById("b1").disabled=true;
        document.getElementById("b2").disabled=true;
        document.getElementById("b3").disabled=true;
        document.getElementById("b4").disabled=true;
        document.getElementById("b5").disabled=true;
        document.getElementById("b4").disabled=true;
        document.getElementById("b7").style.color = "red";
        document.getElementById("b8").style.color = "red";
        document.getElementById("b9").style.color = "red";
        document.getElementById("winmsg").innerHTML="Player X won";
        voice1.play()

    }
    else if((b1=="X")&&(b4=="X")&&(b7=="X"))
    {
        document.getElementById("b2").disabled=true;
        document.getElementById("b3").disabled=true;
        document.getElementById("b5").disabled=true;
        document.getElementById("b6").disabled=true;
        document.getElementById("b8").disabled=true;
        document.getElementById("b9").disabled=true;
        document.getElementById("b1").style.color = "red";
        document.getElementById("b4").style.color = "red";
        document.getElementById("b7").style.color = "red";
        document.getElementById("winmsg").innerHTML="Player X won";
        voice1.play()

    }
    else if((b2=="X")&&(b5=="X")&&(b8=="X"))
    {
        document.getElementById("b1").disabled=true;
        document.getElementById("b3").disabled=true;
        document.getElementById("b4").disabled=true;
        document.getElementById("b6").disabled=true;
        document.getElementById("b8").disabled=true;
        document.getElementById("b9").disabled=true;
        document.getElementById("b2").style.color = "red";
        document.getElementById("b5").style.color = "red";
        document.getElementById("b8").style.color = "red";
        document.getElementById("winmsg").innerHTML="Player X won";
        voice1.play()

    }
    else if((b3=="X")&&(b6=="X")&&(b9=="X"))
    {
        document.getElementById("b2").disabled=true;
        document.getElementById("b4").disabled=true;
        document.getElementById("b5").disabled=true;
        document.getElementById("b7").disabled=true;
        document.getElementById("b8").disabled=true;
        document.getElementById("b1").disabled=true;
        document.getElementById("b3").style.color = "red";
        document.getElementById("b6").style.color = "red";
        document.getElementById("b9").style.color = "red";
        document.getElementById("winmsg").innerHTML="Player X won";
        voice1.play()

    }
    else if((b1=="X")&&(b5=="X")&&(b9=="X"))
    {
        document.getElementById("b2").disabled=true;
        document.getElementById("b3").disabled=true;
        document.getElementById("b4").disabled=true;
        document.getElementById("b6").disabled=true;
        document.getElementById("b7").disabled=true;
        document.getElementById("b8").disabled=true;
        document.getElementById("b1").style.color = "red";
        document.getElementById("b5").style.color = "red";
        document.getElementById("b9").style.color = "red";
        document.getElementById("winmsg").innerHTML="Player X won";
        voice1.play()

    }
    else if((b3=="X")&&(b5=="X")&&(b7=="X"))
    {
        document.getElementById("b1").disabled=true;
        document.getElementById("b2").disabled=true;
        document.getElementById("b4").disabled=true;
        document.getElementById("b6").disabled=true;
        document.getElementById("b8").disabled=true;
        document.getElementById("b9").disabled=true;
        document.getElementById("b3").style.color = "red";
        document.getElementById("b5").style.color = "red";
        document.getElementById("b7").style.color = "red";
        document.getElementById("winmsg").innerHTML="Player X won";
        voice1.play()

    }
   else if((b1=="O")&&(b2=="O")&&(b3=="O"))
    {
        document.getElementById("b4").disabled=true;
        document.getElementById("b5").disabled=true;
        document.getElementById("b6").disabled=true;
        document.getElementById("b7").disabled=true;
        document.getElementById("b8").disabled=true;
        document.getElementById("b9").disabled=true;
        document.getElementById("b1").style.color = "red";
        document.getElementById("b2").style.color = "red";
        document.getElementById("b3").style.color = "red";
        document.getElementById("winmsg").innerHTML="Player 0 won";
        voice2.play()


    }
    else if((b4=="O")&&(b5=="O")&&(b6=="O"))
    {
        document.getElementById("b1").disabled=true;
        document.getElementById("b2").disabled=true;
        document.getElementById("b3").disabled=true;
        document.getElementById("b7").disabled=true;
        document.getElementById("b8").disabled=true;
        document.getElementById("b9").disabled=true;
        document.getElementById("b4").style.color = "red";
        document.getElementById("b5").style.color = "red";
        document.getElementById("b6").style.color = "red";
        document.getElementById("winmsg").innerHTML="Player 0 won";
        voice2.play()
    }
    else if((b7=="O")&&(b8=="O")&&(b9=="O"))
    {
        document.getElementById("b1").disabled=true;
        document.getElementById("b2").disabled=true;
        document.getElementById("b3").disabled=true;
        document.getElementById("b4").disabled=true;
        document.getElementById("b5").disabled=true;
        document.getElementById("b4").disabled=true;
        document.getElementById("b7").style.color = "red";
        document.getElementById("b8").style.color = "red";
        document.getElementById("b9").style.color = "red";
        voice2.play()
    }
    else if((b1=="O")&&(b4=="O")&&(b7=="O"))
    {
        document.getElementById("b2").disabled=true;
        document.getElementById("b3").disabled=true;
        document.getElementById("b5").disabled=true;
        document.getElementById("b6").disabled=true;
        document.getElementById("b8").disabled=true;
        document.getElementById("b9").disabled=true;
        document.getElementById("b1").style.color = "red";
        document.getElementById("b4").style.color = "red";
        document.getElementById("b7").style.color = "red";
        document.getElementById("winmsg").innerHTML="Player 0 won";
        voice2.play()
    }
    else if((b2=="O")&&(b5=="O")&&(b8=="O"))
    {
        document.getElementById("b1").disabled=true;
        document.getElementById("b3").disabled=true;
        document.getElementById("b4").disabled=true;
        document.getElementById("b6").disabled=true;
        document.getElementById("b8").disabled=true;
        document.getElementById("b9").disabled=true;
        document.getElementById("b2").style.color = "red";
        document.getElementById("b5").style.color = "red";
        document.getElementById("b8").style.color = "red";
        document.getElementById("winmsg").innerHTML="Player 0 won";
        voice2.play()
    }
    else if((b3=="O")&&(b6=="O")&&(b9=="O"))
    {
        document.getElementById("b2").disabled=true;
        document.getElementById("b4").disabled=true;
        document.getElementById("b5").disabled=true;
        document.getElementById("b7").disabled=true;
        document.getElementById("b8").disabled=true;
        document.getElementById("b1").disabled=true;
        document.getElementById("b3").style.color = "red";
        document.getElementById("b6").style.color = "red";
        document.getElementById("b9").style.color = "red";
        document.getElementById("winmsg").innerHTML="Player 0 won";
        voice2.play()
    }
    else if((b1=="O")&&(b5=="O")&&(b9=="O"))
    {
        document.getElementById("b2").disabled=true;
        document.getElementById("b3").disabled=true;
        document.getElementById("b4").disabled=true;
        document.getElementById("b6").disabled=true;
        document.getElementById("b7").disabled=true;
        document.getElementById("b8").disabled=true;
        document.getElementById("b1").style.color = "red";
        document.getElementById("b5").style.color = "red";
        document.getElementById("b9").style.color = "red";
        document.getElementById("winmsg").innerHTML="Player 0 won";
        voice2.play()
    }
    else if((b3=="O")&&(b5=="O")&&(b7=="O"))
    {
        document.getElementById("b1").disabled=true;
        document.getElementById("b2").disabled=true;
        document.getElementById("b4").disabled=true;
        document.getElementById("b6").disabled=true;
        document.getElementById("b8").disabled=true;
        document.getElementById("b9").disabled=true;
        document.getElementById("b3").style.color = "red";
        document.getElementById("b5").style.color = "red";
        document.getElementById("b7").style.color = "red";
        document.getElementById("winmsg").innerHTML="Player 0 won";
        voice2.play()
    }
    else if((b1=="X"||b1=="O")&&((b2=="X"||b2=="O"))&&((b3=="X"||b3=="O"))&&((b4=="X"||b4=="O"))&&((b5=="X"||b5=="O"))&&((b6=="X"||b6=="O"))&&((b7=="X"||b7=="O"))&&((b8=="X"||b8=="O"))&&((b9=="X"||b9=="O")))
    {
        document.getElementById("winmsg").innerHTML="Its a TIE";
    }
}
    function restartButton()
    {
        location.reload();
       // document.getElementById("b1").value = document.getElementById("b2").value= document.getElementById("b3").value= document.getElementById("b4").value= document.getElementById("b5").value= document.getElementById("b6").value= document.getElementById("b7").value= document.getElementById("b8").value= document.getElementById("b9").value= "";
    }


