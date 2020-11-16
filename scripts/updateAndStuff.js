//on_load
select_weapon()
select_armor()
select_bouclier()

//Functions

function update_rap(){
	
	var vit = document.getElementById("vitesse").value;
	//var malus = document.getElementById("malusv").value;
	var vitesse_tot = parseInt(vit); //- parseInt(malus);
	document.getElementById("rap").innerText = vitesse_tot;
	localStorage.setItem("vitesse_initial", vitesse_tot);
	update_palier()
}

function update_palier(){
			
	var palier;
	var vit = parseInt(document.getElementById("rap").innerText) - parseInt(localStorage.malus);
	if (vit > 17) {palier = 3;}
	else if (vit > 14) {palier = 4;}
	else if (vit > 11) {palier = 5;}
	else if (vit > 8) {palier = 6;}
	else if (vit > 5) {palier = 7;}
	else if (vit > 3) {palier = 8;}
	else if (vit > 1) {palier = 9;}
	else {palier = 10;}
				
	document.getElementById("palier").innerText = palier + parseInt(localStorage.selected_weapon_malus);
	document.getElementById("malus_txt").innerText = localStorage.malus
}

function getRandomInt(max) {	

	return Math.floor(Math.random() * Math.floor(max));
}

function lancer_de(){
	
	var de = parseInt(document.getElementById("dedarme").value);
	var jet = getRandomInt(de)+1;
	if (document.getElementById("dedarme").value == "4+1"){
		jet = getRandomInt(4)+2; 
	}
	document.getElementById("jet").innerText = jet;
	var newvitesse = jet + parseInt(document.getElementById("init").innerText);
	document.getElementById("init").innerText = newvitesse;
}

function start_init(){
	
	var initial_init = parseInt(document.getElementById("rap").innerText)+100 - parseInt(localStorage.malus);
	localStorage.setItem("init", initial_init);
	document.getElementById("init").innerText = localStorage.init
	document.getElementById("tours").innerText = 0;
	lancer_de()
}
function update_init(){
	localStorage.init = parseInt(localStorage.init) - parseInt(document.getElementById("palier").innerText);
	document.getElementById("init").innerText = localStorage.init;
	document.getElementById("tours").innerText = parseInt(document.getElementById("tours").innerText)+1;
}
function reverse_init(){
	
	localStorage.init = parseInt(localStorage.init) + parseInt(document.getElementById("palier").innerText)
	document.getElementById("init").innerText = localStorage.init
	document.getElementById("tours").innerText = parseInt(document.getElementById("tours").innerText)-1;
}

//selection

function select_weapon(){
	
	var form = document.getElementById("select_weapon");
	var dedarme;
	var malusp = 0;
	var data = new FormData(form);
	var selected_weapon = "";
	for (const entry of data) {
		selected_weapon = entry[1];
	  };
	  
	switch(selected_weapon){
			case "bhand":
				dedarme = localStorage.bhandDinit;
				malusp = localStorage.bhandMalus;
				break;
			case "dague":
				dedarme = localStorage.dagueDinit;
				malusp = localStorage.dagueMalus;
				break;
			case "cimet":
				dedarme = localStorage.cimetDinit;
				malusp = localStorage.cimetMalus;
				break;
			case "baton":
				dedarme = localStorage.batonDinit;
				malusp = localStorage.batonMalus;
				break;
			case "epee1":
				dedarme = localStorage.epee1Dinit;
				malusp = localStorage.epee1Malus;
				break;
			case "epee2":
				dedarme = localStorage.epee2Dinit;
				malusp = localStorage.epee2Malus;
				break;
			case "mdarm":
				dedarme = localStorage.mdarmDinit;
				malusp = localStorage.mdarmMalus;
				break;
			case "fleau":
				dedarme = localStorage.fleauDinit;
				malusp = localStorage.fleauMalus;
				break;
			case "hache":
				dedarme = localStorage.hacheDinit;
				malusp = localStorage.hacheMalus;
				break;
			case "marte":
				dedarme = localStorage.marteDinit;
				malusp = localStorage.marteMalus;
				break;
			case "lance":
				dedarme = localStorage.lanceDinit;
				malusp = localStorage.lanceMalus;
				break;
			case "carro":
				dedarme = localStorage.carroDinit;
				malusp = localStorage.carroMalus;
				break;
			case "arccm":
				dedarme = localStorage.arccmDinit;
				malusp = localStorage.arccmMalus;
				break;
			case "arclo":
				dedarme = localStorage.arcloDinit;
				malusp = localStorage.arcloMalus;
				break;
			case "frond":
				dedarme = localStorage.frondDinit;
				malusp = localStorage.frondMalus;
				break;							
				
			default:
				dedarme = "0";
				malusp = 0
	}
	
	document.getElementById("dedarme").innerText= "1D" + dedarme;
	document.getElementById("dedarme").value= dedarme;
	localStorage.setItem("selected_weapon_malus", malusp);
	update_palier()
}

function select_armor(){
	
	var form = document.getElementById("select_armor");
	var malusvAr = 0;
	var data = new FormData(form);
	var selected_armor = "";
	for (const entry of data) {
		selected_armor = entry[1];
	  };
	  
	switch(selected_armor){
			case "none":
				malusvAr = 0;
				break;
			case "cuirn":
				malusvAr = localStorage.cuirnMalus;
				break;
			case "cuclo":
				malusvAr = localStorage.cucloMalus;
				break;
			case "cotma":
				malusvAr = localStorage.cotmaMalus;
				break;
			case "arpla":
				malusvAr = localStorage.arplaMalus;
				break;
			default:
				malusvAr = 0;
}
									
	var previous_malus = localStorage.previous_armor+"Malus"
	
	localStorage.malus = parseInt(localStorage.malus) - parseInt(localStorage.getItem(previous_malus))
	localStorage.malus = parseInt(localStorage.malus) + parseInt(malusvAr)
	
	localStorage.setItem("previous_armor", selected_armor);
	update_palier()
}
			
function select_bouclier(){
	
	var form = document.getElementById("select_bouclier");
	var malusvBr = 0;
	var data = new FormData(form);
	var selected_bouclier = "";
	for (const entry of data) {
		selected_bouclier = entry[1];
	  };
	  
	switch(selected_bouclier){
			case "none":
				malusvBr = 0;
				break;
			case "boleg":
				malusvBr = localStorage.bolegMalus;
				break;
			case "bonor":
				malusvBr = localStorage.bonorMalus;
				break;
			case "boren":
				malusvBr = localStorage.borenMalus;
				break;	
			default:
				malusvBr = 0;
	}				
					
	var previous_malus = localStorage.previous_bouclier+"Malus"

	localStorage.malus = parseInt(localStorage.malus) - parseInt(localStorage.getItem(previous_malus))
	localStorage.malus = parseInt(localStorage.malus) + parseInt(malusvBr)
	
	localStorage.setItem("previous_bouclier", selected_bouclier);
	update_palier()
}
