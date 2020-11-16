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
	}
	
	document.getElementById("dedarme").innerText= "1D" + dedarme;
	document.getElementById("dedarme").value= dedarme;
	localStorage.setItem("selected_weapon_malus", malusp);
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
	document.getElementById("rap").innerText = parseInt(document.getElementById("rap").innerText) + parseInt(localStorage.getItem(previous_malus));
					
	var newvitesse = parseInt(document.getElementById("rap").innerText) - parseInt(malusvAr);
	document.getElementById("rap").innerText = newvitesse;
	
	localStorage.malus = parseInt(localStorage.malus) - parseInt(localStorage.getItem(previous_malus))
	localStorage.malus = parseInt(localStorage.malus) + parseInt(malusvAr)
	
	localStorage.setItem("previous_armor", selected_armor);
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
	document.getElementById("rap").innerText = parseInt(document.getElementById("rap").innerText) + parseInt(localStorage.getItem(previous_malus));				
	
	var newvitesse = parseInt(document.getElementById("rap").innerText) - parseInt(malusvBr);				
	document.getElementById("rap").innerText = newvitesse;

	localStorage.malus = parseInt(localStorage.malus) - parseInt(localStorage.getItem(previous_malus))
	localStorage.malus = parseInt(localStorage.malus) + parseInt(malusvBr)
	
	localStorage.setItem("previous_bouclier", selected_bouclier);
}