
function jogar(){

	var num = window.prompt("Digite um numero: ")

	var x = Math.floor(Math.random() * 6) + 1;
	//document.getElementById("text1").innerHTML = x;

	if (x == 1){
		document.getElementById("img").src="1.jpg";
		if (num == 1){
			document.getElementById("text2").innerHTML = "Acertou";
		}
		else{
			document.getElementById("text2").innerHTML = "Errou";
		}
	}
	if (x == 2){
		document.getElementById("img").src="2.jpg";
		if (num == 2){
			document.getElementById("text2").innerHTML = "Acertou";
		}
		else{
			document.getElementById("text2").innerHTML = "Errou";
		}
	}
	if (x == 3){
		document.getElementById("img").src="3.jpg";
		if (num == 3){
			document.getElementById("text2").innerHTML = "Acertou";
		}
		else{
			document.getElementById("text2").innerHTML = "Errou";
		}
	}
	if (x == 4){
		document.getElementById("img").src="4.jpg";
		if (num == 4){
			document.getElementById("text2").innerHTML = "Acertou";
		}
		else{
			document.getElementById("text2").innerHTML = "Errou";
		}
	}
	if (x == 5){
		document.getElementById("img").src="5.jpg";
		if (num == 5){
			document.getElementById("text2").innerHTML = "Acertou";
		}
		else{
			document.getElementById("text2").innerHTML = "Errou";
		}
	}
	if (x == 6){
		document.getElementById("img").src="6.jpg";
		if (num == 6){
			document.getElementById("text2").innerHTML = "Acertou";
		}
		else{
			document.getElementById("text2").innerHTML = "Errou";
		}
	}


}
