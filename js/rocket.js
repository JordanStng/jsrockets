var timer = null;
var countdownNumer = 10;

var changeState = function (state) {
	document.body.className = "body-state"+state;

	clearInterval(timer);
	countdownNumer = 10;
	document.getElementById("countdown").innerHTML = countdownNumer;

	//countdown
	if (state == 2) {
		timer = setInterval(function () {
			countdownNumer = countdownNumer -1;
			document.getElementById("countdown").innerHTML = countdownNumer;
		if (countdownNumer <= 0) {
			changeState(3);
		}
		}, 1000);
	} else if (state == 3) {
		var success = setTimeout(function ()
			{
				var randomNumber = Math.round (Math.random ()*10);

				console.log ("randomNumber", randomNumber)

				//success
				if (randomNumber > 5) {
					changeState (4);

				//failure
				} else {
					changeState (5);

				}

			}, 2000);
	}
}