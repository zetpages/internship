// // // Write your solution there

let lights = document.querySelectorAll('#traffic-lights > div');
	const times = [20000, 2000, 15000];
    let counter = 0;

function trafficLights() { 
	for (var i=0; i < lights.length; i++) {
		lights[i].classList.remove('on');
	}

	lights[counter].classList.add('on');
	setTimeout(trafficLights, times[counter]);
	counter = (counter + 1) % times.length;
}

window.addEventListener('load', () => setTimeout(function() {
    trafficLights(); 
}, 3000));