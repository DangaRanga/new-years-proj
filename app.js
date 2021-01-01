
let countDownDate = new Date('Jan 1, 2021 00:00:00').getTime();


function addZero(number){
    if (number.toString().length  === 1){
        return '0' + number;
    }else{
        return number;
    }
}

function hideElements(elements){
    for(element of elements){
        element.style.display = 'none';
    }
}
function timer() {
    setInterval(function () {
        let now = new Date().getTime();

        let distance = countDownDate - now;
        if (distance > 0) {
            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
            // Set blocks
            document.querySelector('#days .number').innerHTML = addZero(days);
            document.querySelector('#hours .number').innerHTML = addZero(hours);
            document.querySelector('#minutes .number').innerHTML = addZero(minutes);
            document.querySelector('#seconds .number').innerHTML = addZero(seconds);
        }else{
            document.querySelector('.fireworks').style.display = "block";
            let boxes = document.getElementsByClassName('box');
            confetti.start(2, 3);
            hideElements(boxes);
            document.querySelector('#message').classList.remove('hidden');
        }
    });
}

function getSVGLength(){
    const svg = document.querySelectorAll('#message path');
    for(let i=0; i<svg.length;i++){
        console.log(`Letter ${i} is ${svg[i].getTotalLength()}`);
    }
}
timer();
