var timer;
var millSecTimer;
var startPause = document.querySelector('.start-pause');
var clear = document.querySelector('.clear');
var millSecViewer = document.querySelector('span');
var totalTimeViewer = document.querySelector('p');


startPause.addEventListener('click', startPauseHandler);
clear.addEventListener('click', clearHandler);


function startPauseHandler() {
    if (startPause.innerHTML == 'Start') {
    	startPause.innerHTML = 'Pause';
    	timer = new Timer();
    	millSecTimer = setInterval(timer.millisecondsCounter, 9);
    } else if (!timer.stop) {
    	timer.stop = true;
    	clearInterval(millSecTimer);
    	startPause.innerHTML = 'Continue';
    } else {
    	startPause.innerHTML = 'Pause';
    	timer.stop = false;
    	millSecTimer = setInterval(timer.millisecondsCounter, 9);

    }
}

function clearHandler() {
    clearInterval(millSecTimer);
    startPause.innerHTML = 'Start';
    millSecViewer.innerHTML = '0';
    totalTimeViewer.innerHTML = '00:00:00';
}


function Timer() {
   var hours = 0;
   var minutes = 0;
   var seconds = 0;
   var totalTime;
   var counter = 0;
   var stop = false;

   this.millisecondsCounter = function() {
			counter += 9;
			millSecViewer.innerHTML = counter;
			if (counter >= 1000) {
				counter = 0;
				seconds += 1;
				calculateTotalTime();
		}
	}

	calculateTotalTime = function() {
		if (seconds < 60) {
			totalTime = checkUnit(hours) + ':' + checkUnit(minutes) + ':' + checkUnit(seconds);
		} else if (minutes < 60) {
			minutes += 1;
			totalTime = hours + ':' + minutes + ':00';
			totalTime = checkUnit(hours) + ':' + checkUnit(minutes) + ':00';
			seconds = 0;
		} else if (hours < 24) {
			hours += 1;
			seconds = 0;
			minutes = 0;
			totalTime = hours + ':00:00';
			totalTime = checkUnit(hours) + ':00:00';
		} else {
			seconds = 0;
			minutes = 0;
			hours = 0;
			totalTime = '00:00:00';
		}
		totalTimeViewer.innerHTML = totalTime;
	}

	checkUnit = function(unit) {
		if (unit < 10) {
			return '0' + unit;
		}
		return unit;
	}
}
