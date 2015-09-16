function reset(){
	//Hide 16th note column headers
	$('.ea').css('opacity', 0);
	//Clear out color from all non-standardized squares
	$('td:not(.standard)').css('background-color','transparent');
};

function randomize(start, stop, pair){
	//Loop through collumns from selected start point to selected stop point
	for (var i = start; i <= stop; i++) {
		//Generate a random number
		var rand = Math.random();
		//Based on the value of the randomized number, color the square
		//in the snare row, kick row, or leave both rows blank
		if(rand<0.3334){
			//If a 'pair' is specified, fill in the current note
			//and its mirror note to make the beat symmetrical.
			if(pair){
				$('#snare-'+i+', #snare-'+(i+pair)).css('background-color','darkred');
			}else{
				$('#snare-'+i).css('background-color','darkred');
			}
		}else if(rand<0.6666){
			if(pair){
				$('#kick-'+i+', #kick-'+(i+pair)).css('background-color','darkblue');
			}else{
				$('#kick-'+i).css('background-color','darkblue');
			}
		}
	};
};

function generate(){
	//Reset any changes made in the last calling of the 'generate' method
	reset();
	//Depending on selected level, generate beat based on parameters
	switch($('#level').val()){
		case 'one':
			randomize(5, 6, 2);
			break;
		case 'two':
			randomize(5, 8);
			break;
		case 'three':
			//Show 16th note column headers
			$('.ea').css('opacity', 0.25);
			randomize(9, 12, 4);
			break;
		default:
			return;
	}
};

//Call generate function on page load
generate();