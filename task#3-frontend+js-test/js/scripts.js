// // Write your solution there

const red = document.getElementsByClassName("red")[0];
const yellow = document.getElementsByClassName("yellow")[0];
const green = document.getElementsByClassName("green")[0];


setInterval(() => {
    green.classList.add('on');
    if (yellow.classList.contains('on') || red.classList.contains('on')) {
        yellow.classList.remove('on');
        red.classList.remove('on');
    }

    function turnYellow() {
        yellow.classList.add('on');
        if (green.classList.contains('on') || red.classList.contains('on')) {
            green.classList.remove('on');
            red.classList.remove('on');
        }
    }
    setTimeout(turnYellow, 4000);

    setTimeout(() => {
        red.classList.add('on');
        if (yellow.classList.contains('on') || green.classList.contains('on')) {
            yellow.classList.remove('on');
            green.classList.remove('on');
        }
    },6000);

    setTimeout(turnYellow, 9000);
}, 11000);


// // solution
// const red = document.getElementsByClassName("red")[0];
// const yellow = document.getElementsByClassName("yellow")[0];
// const green = document.getElementsByClassName("green")[0];


// green.classList.remove('on');

// function trafficLight() {
//     function greenOn() {
//         green.classList.toggle('on');
//     }

//     function greenOff() {
//         green.classList.toggle('on');
//     }

//     function yellowOn() {
//         yellow.classList.toggle('on');
//     }

//     function yellowOff() {
//         yellow.classList.toggle('on');
//     }

//     function redOn() {
//         red.classList.toggle('on');
//     }

//     function redOff() {
//         red.classList.toggle('on');
//     }

//     setTimeout(greenOn, 0);
//     setTimeout(greenOff, 20000);
//     setTimeout(yellowOn, 20000);
//     setTimeout(yellowOff, 22000);
//     setTimeout(redOn, 22000);
//     setTimeout(redOff, 37000);
//     setTimeout(yellowOn, 37000);
//     setTimeout(yellowOff, 39000);
// }

// setInterval(trafficLight, 39000);
// trafficLight();



