document.getElementById('vid').play();

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

function showText() {
    let randomValue = getRandomInteger(30, 70);
    let margin = randomValue + "%";
    document.getElementsByClassName('text-box')[0].style.top = margin;
    document.getElementsByClassName('text-box')[0].style.left = margin;
    console.log("Printed");
}

setInterval(showText, 1000);