// Load items
if(typeof(Storage) !== "undefined"){
//Caractéristique
	localStorage.setItem("malus", "0");
//Dés d'initiative
	localStorage.setItem("bhandDinit", "12");
	localStorage.setItem("dagueDinit", "10");
	localStorage.setItem("cimetDinit", "8");
	localStorage.setItem("batonDinit", "8");
	localStorage.setItem("epee1Dinit", "6");
	localStorage.setItem("epee2Dinit", "6");
	localStorage.setItem("mdarmDinit", "6");
	localStorage.setItem("fleauDinit", "8");
	localStorage.setItem("hacheDinit", "6");
	localStorage.setItem("marteDinit", "4+1");
	localStorage.setItem("lanceDinit", "6");
	localStorage.setItem("carroDinit", "6");
	localStorage.setItem("arccmDinit", "8");
	localStorage.setItem("arcloDinit", "6");
	localStorage.setItem("frondDinit", "10");
//Malus Palier Armes
	localStorage.setItem("selected_weapon_malus", "0")
	localStorage.setItem("bhandMalus", "0");
	localStorage.setItem("dagueMalus", "1");
	localStorage.setItem("cimetMalus", "2");
	localStorage.setItem("batonMalus", "2");
	localStorage.setItem("epee1Malus", "3");
	localStorage.setItem("epee2Malus", "5");
	localStorage.setItem("mdarmMalus", "4");
	localStorage.setItem("fleauMalus", "4");
	localStorage.setItem("hacheMalus", "3");
	localStorage.setItem("marteMalus", "4");
	localStorage.setItem("lanceMalus", "4");
	localStorage.setItem("carroMalus", "3");
	localStorage.setItem("arccmMalus", "2");
	localStorage.setItem("arcloMalus", "2");
	localStorage.setItem("frondMalus", "1");
// Malus Vitesse Armures
	localStorage.setItem("cuirnMalus", "0");
	localStorage.setItem("cucloMalus", "1");
	localStorage.setItem("cotmaMalus", "3");
	localStorage.setItem("arplaMalus", "5");
	localStorage.setItem("bolegMalus", "1");
	localStorage.setItem("bonorMalus", "1"),
	localStorage.setItem("borenMalus", "2");
//Fix Bouclier+armor bug
	localStorage.setItem("previous_bouclier", "fake");
	localStorage.setItem("previous_armor", "fake");
	localStorage.setItem("fakeMalus", "0");
	localStorage.setItem("noneMalus", "0");
} else {
	alert("Could not load data");
}

