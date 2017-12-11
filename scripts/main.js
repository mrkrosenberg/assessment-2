$(document).ready( function() {
	console.log("shit works!");

	var trackLength = $('.raceTrack').width();
		console.log(trackLength);
		var finish1 = $('.finishLine1').width();
		console.log(finish1);
		var finish2 = $('.finishLine2').width();
		console.log(finish2);
	


	$(document).keydown( function(race) {
		if (race.keyCode == 39) {
			$('#racer1').animate( {
				marginLeft: '+=10'
			}, -200);
		} else if (race.keyCode == 190) {
			$('#racer2').animate( {
				marginLeft: '+=10'
			}, -200);
		}
		
	});

	$(document).keydown( function(race) {
		
		if (race.keyCode == 39) {
			$('.finishLine1').animate( {
				width: '+=10'
			}, -200);
			finish1 = $('.finishLine1').width();  
			checkForWinner();
			console.log(finish1);
		} 
		 if (race.keyCode == 190) {
			$('.finishLine2').animate( {
				width: '+=10'
			}, -200);
			finish2 = $('.finishLine2').width();
			checkForWinner();
		}
		
		console.log(finish2);
		console.log(trackLength);
	});

function checkForWinner (finish, raceTrack) {
	if (finish1 > trackLength) {
		alert('Player 1 Wins!');
	} else if (finish2 > trackLength) {
		alert('Player 2 Wins!');
	}
}

$('.reset').click( function() {
	location.reload();
});

$('#instructions').click( function () {
	alert("Instructions:");
});

});

