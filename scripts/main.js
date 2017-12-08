$(document).ready( function() {
	console.log("shit works!");

	var racer1 = $('#racer1').position();
	var racer2 = $('#racer2').position();

	console.log(racer1.left);
	console.log(racer2.left);

	$(document).keydown( function(race) {
		if (race.keyCode == 39) {
			$('#racer1').animate( {
				marginLeft: '+=10vw'
			});
		} else if (race.keyCode == 190) {
			$('#racer2').animate( {
				marginLeft: '+=10vw'
			});
		}
	});
	
	var winner = function () {
		if (racer1 = 8) {
			alert("Racer 1 Wins!");
		} else if (racer2 = 8) {
			alert("Racer 2 Wins!");
		}
	};










});

console.log("wooo");