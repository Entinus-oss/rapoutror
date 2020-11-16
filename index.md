<!DOCTYPE html>
<html>

	<head>
		<title> Rap calculator </title>
		
		<link rel="stylesheet" href="styles.css">
		
		<script src="scripts/loadItems.js" async></script>
		<script src="scripts/updateAndStuff.js" defer></script>

		
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
	</head>
	
	<body>
	
	<h1> <center>Rapoutror</center> </h1>
		
		<div class="grid-container">
		
			<div class="vitesse">
				<h2> Vitesse </h2>
				<h1 id="rap">0</h1>
				<form name="Rapidité">
					<input type="number" id="vitesse" name="rapidite" value="0" min="0" max="20" oninput="update_rap()"/>
					<!--
					<label>malus de vitesse</label>
					<input type="number" id="malusv" name="malusrapidite" value="0" min="0" max="20"/>
					-->
				</form>
			</div>
			
			<div class="de_arme">
				<h2> Dé d'arme </h2>
				<h1 id="dedarme">Aucune arme sélectionnée</h1>				
			</div>
			
			<div class="malus_vitesse">
				<h2>Malus de vitesse</h2>
				<h1 id="malus_txt">0</h1>
			</div>
			
			<div class="left_blank">
				<h2>////</h2>
			</div>
			
			<div class="jet">
				<h2>Jet!</h2>
				<h1 id="jet"></h1>
				<button type="button" onclick="lancer_de()">GO</button>
			</div>
			
			<div class="right_blank">
				<h2>////</h2>
			</div>
		
			<div class="tours">
				<h2>Tours</h2>
				<h1 id="tours">0<h1>
			</div>
			
			<div class="initiative">
				<h2>Initiative</h2> 
				<h1 id="init">0<h1>
			</div>
		
			<div class="frequence">
				<h2> Palier </h2>
				<h1 id="palier">0</h1>
				<button type="button" onclick="update_palier()">GO</button>
			</div>
			
			<div class="return">
				<button type="button" onclick="reverse_init()">Précédent</button>
			</div>
			
			<div class="start">
				<button type="button" onclick="start_init()">Commencer</button> 
			</div>
			
			<div class="next">
				<button type="button" onclick="update_init()">Suivant</button> 
			</div>
			
			<div class="weapon">
				<h3> Arme </h3>
				<form id="select_weapon" name="Séléction d'arme">
					<select id="weapon_selection" name="weapon" oninput="select_weapon()">
						<!-- ARME CORPS À CORPS -->
						  <option value="bhand">Main nu</option>
						  <option value="dague">Dague</option>
						  <option value="cimet">Cimeterre</option>
						  <option value="baton">Baton/Massue</option>
						  <option value="epee1">Épée à une main</option>
						  <option value="epee2">Épée à deux mains</option>
						  <option value="mdarm">Masse d'arme</option>
						  <option value="fleau">Fléau</option>
						  <option value="hache">Hache</option>
						  <option value="marte">Marteau</option>
						  <option value="lance">Lance</option>
						<!-- ARME À DISTANCE -->
						  <option value="carro">Carreau</option>
						  <option value="arccm">Arc court/moyen</option>
						  <option value="arclo">Arc long</option>
						  <option value="frond">Fronde</option>
					</select>
				</form>
				
			</div>
			
			<div class="armor">
				<h3> Armure </h3>
				<form id="select_armor" name="Séléction d'armure">	
					<select id="armor_selection" name="armor" oninput="select_armor()">
						<option value="none">Aucune</option>
						<option value="cuirn">Cuir</option>
						<option value="cuclo">Cuir clouté</option>
						<option value="cotma">Cotte de maille</option>
						<option value="arpla">Armure à plaques</option>
					</select>
				</form>
				
			</div>
			
			<div class="bouclier">
				<h3> Bouclier </h3>	
				<form id="select_bouclier" name="Séléction de bouclier">		
					<select id="bouclier_selection" name="bouclier" oninput="select_bouclier()">
						<option value="none">Aucun</option>
						<option value="boleg">Bouclier léger</option>
						<option value="bonor">Bouclier normal</option>
						<option value="boren">Bouclier à plaques</option>
					</select>
				</form>
				
			</div>
			
		</div>
	</body>
</html>
