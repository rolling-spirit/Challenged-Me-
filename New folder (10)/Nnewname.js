    Play1 = localStorage.getItem("Player1");
	Play2 = localStorage.getItem("Player2");

	scoreP1 = 0;
	scoreP2 = 0;

document.getElementById("Play1").innerHTML = Play1 + " : ";
document.getElementById("Play2").innerHTML = Play2 + " : ";

document.getElementById("scoreP1").innerHTML = scoreP1 ;
document.getElementById("scoreP2").innerHTML = scoreP2 ;

document.getElementById("plaQ").innerHTML = "Question Turn - " + Play1 ;
document.getElementById("plaA").innerHTML = "Answer Turn - " + Play2 ;

function transfer(){
    num1 = document.getElementById("num01").value;
    num2 = document.getElementById("num02").value;
    Theanswer = parseInt(num1) * parseInt(num2);
    console.log(Theanswer);

    anumber = "<h4>" + num1 + "×"+ num2 +"</h4>";
    boxofinput = "<br>Answer : <input type='text' id='input_check_box'>";
    checkknowledge = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    fragments = anumber + boxofinput + checkknowledge ;
    document.getElementById("output").innerHTML=fragments;
    document.getElementById("num1").value= "";
    document.getElementById("num2").value= "";
}