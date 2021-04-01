$(document).ready(function() {
	let choix = ["Pierre", "Feuille", "Ciseaux"]
	 $(".btn").click(function() {
	 	let ordi = choix[Math.floor(Math.random() * choix.length)];
	 	let player = $(this).text();
	 	console.log("Player : " + player)
	 	console.log("Ordi : " + ordi)

	 	if (player == ordi) {
	 		console.log("Egalité");
	 		$(".egalite").addClass("active")
	 	}
	 	else if ((player === "Pierre" && ordi === "Feuille") || (player === "Feuille" && ordi === "Ciseaux") || (player === "Ciseaux" && ordi === "Pierre")) {
	 		console.log("Perdu");
	 		$(".perdu").addClass("active")
	 	}
	 	else {
	 		console.log("Gagné");
	 		$(".gagne").addClass("active")
	 	}
	 	$(".resultat").addClass("active");
	 	$(".choix").addClass("active")
	 	$(".result").empty()
	 	$(".result").append("<span class=\"player\">" + player + "</span>" + "<span class=\"vs\">VS</span>" + "<span class=\"ordi\">" + ordi + "</span>")
	 });

    $(".rejouer").click(function() {
    	$(".choix").removeClass("active");
    	$(".resultat").removeClass("active");
    	$(".resultat-text").removeClass("active");
    })
});
