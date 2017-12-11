$(document).ready( function() {
	console.log("shit works!");
// creates variables for length of track and relative position of finish line
	var trackLength = $('.raceTrack').width();
		console.log(trackLength);
		var finish1 = $('.finishLine1').width();
		console.log(finish1);
		var finish2 = $('.finishLine2').width();
		console.log(finish2);
	
// creates function for racer movement

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

// creates function for finish line
// keydown adds incrementally to finishlines as racer moves across screen
// player wins when finishline element is the length of the race track

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

//checks with each keydown if the finish line element is the greater or equal 
// determines winner 

function checkForWinner (finish, raceTrack) {
	if (finish1 > trackLength) {
		alert('Player 1 Wins!');
	} else if (finish2 > trackLength) {
		alert('Player 2 Wins!');
	}
}

// resets the form from the server

$('.reset').click( function() {
	location.reload();
});

// pops up alert with instructions

$('#instructions').click( function () {
	alert("Instructions:");
});

});

