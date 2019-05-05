var abonnements = function() {
	document.getElementById('calculer').addEventListener('click', calculersuite1)	
	document.getElementById('calculer2').addEventListener('click', calculersuite2)	
	
}
window.addEventListener("load",abonnements);

var calculersuite1 = function(){
	entreeN = document.getElementById('entreeN').value;
	entree = document.getElementById('entree').value;
	resultat = document.getElementById('resultat');
		if (entreeN !=""){
			var u0 = 2;
			var k=0;
			while(k < entreeN){
				k++;
				u0 = 1.2 * u0 + 10;}
				calculUn = "u<sub><b>"+entreeN+"</b></sub> = <b>"+u0 +"</b> </br>";
			} else {calculUn = "";}
			if (entree !=  "" && entree > 30){
				var un=2;
				var i = 0;
				while(un < entree){
					un= 1.2 * un + 10;
					i++;}
					rang ="La première valeure superieure ou égale à <b>"+ entree + "</b>est <b>" + un + "</b> </br>Elle est atteinte en u<sub><b>" + i + "</b></sub>";
				} else{
				rang = "";
			}
		resultat.innerHTML = calculUn +rang;
}
var calculersuite2 = function(){
	entreeN2 = document.getElementById('entreeN2').value;
	entree2 = document.getElementById('entree2').value;
	resultat2 = document.getElementById('resultat2');
	if (entreeN !=""){
			var u0 = 2018;
			var k=0;
			while(k < entreeN2){
				k++;
				u0 = 0.8 * u0 - 2;}
				calculUn2 = "u<sub><b>"+entreeN2+"</b></sub> = <b>"+u0 +"</b> </br>";
			} else {calculUn2 = "";}

			if (entree2 !=  "" && entree2 < 1000){
				var un=2018;
				var i = 0;
				while(un > entree2){
					un = 0.8 * un - 2;
					i++;}
					rang ="La première valeure de n inferieure ou égale à <b>"+ entree2 + "</b>est <b>" + un + "</b> </br>Elle est atteinte en u<sub><b>" + i + "</b></sub>";
				} else{
				rang = "";
			}
		resultat2.innerHTML = calculUn2 +rang;
}