window.onload = function()
{
	const miliseconds =
	{
		value: 0,
		addValue: document.getElementById("miliseconds"),
	};

	const seconds =
	{
		value: 0,
		addValue: document.getElementById("seconds"),
	};

	const minutes =
	{
		value: 0,
		addValue: document.getElementById("minutes"),
	};

	const buttonStart = document.getElementById("button-start");
	const buttonStop = document.getElementById("button-stop");
	const buttonReset = document.getElementById("button-reset");

	var interval;

	buttonStart.onclick = function() 
	{
		clearInterval(interval);
		interval = setInterval(stopwatch, 5)
	}

	buttonStop.onclick = () => clearInterval(interval);

	buttonReset.onclick = function()
	{
		clearInterval(interval); 
		minutes.value = seconds.value = miliseconds.value = 0;
		minutes.addValue.innerHTML = seconds.addValue.innerHTML = miliseconds.addValue.innerHTML = "00";
	}

	//the function below increments the time units and changes these units on html
	function startTime(unit1, unit2) 
	{
		if (unit2 != undefined)
		{
			unit2.value = 0;
			unit2.addValue.innerHTML = "0" + unit2.value;
		}
		unit1.value++;
		unit1.value = unit1.value < 10 ? "0" + unit1.value : unit1.value;
		unit1.addValue.innerHTML = unit1.value;
	}
	
	function stopwatch()
	{
		startTime(miliseconds);
		if (miliseconds.value > 99)
		{
			startTime(seconds, miliseconds);
			if (seconds.value > 59)
				startTime(minutes, seconds);
		}
	}
}