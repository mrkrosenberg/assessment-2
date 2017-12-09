$(document).ready( function() {
	console.log("shit works!");

	var racer1 = $('#racer1').position();
	var racer2 = $('#racer2').position();
	var margin1 = $('#racer1').css('margin-right');
	console.log(margin1);
	var margin2 = $('#racer2').css('margin-right');
	console.log(margin2);
	

	$(document).keydown( function(race) {
		if (race.keyCode == 39) {
			$('#racer1').animate( {
				marginRight: '-=10vw'
			}, -200);
			margin1 = $('#racer1').css('margin-right');
			console.log(margin1);
			winner();
		} else if (race.keyCode == 190) {
			$('#racer2').animate( {
				marginLeft: '+=10vw'
			}, -200);
			margin2 = $('#racer2').css('margin-right');
			console.log(margin2);
			// winner();
		}
		
	});
	
	var winner = function () {
		if (margin1 < '10vw') {
			alert('Player 1 Wins!');
		} else if (margin2 < '10vw') {
			alert('Player 2 Wins!');
	} else {

	}
};




});

console.log("wooo");