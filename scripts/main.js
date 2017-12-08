$(document).ready( function() {
	console.log("shit works!");

	


	$(document).keydown( function(race) {
		if (race.keyCode == 39) {
			$('#racer1').animate( {
				marginLeft: '+=10'
			});
		} else if (race.keyCode == 190) {
			$('#racer2').animate( {
				marginLeft: '+=10'
			});
		}
	});








});

console.log("wooo");