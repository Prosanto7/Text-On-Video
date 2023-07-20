document.getElementById('vid').play();

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

function showText() {
    let randomValue = getRandomInteger(25, 75);
    let margin = randomValue + "%";
    
    if (randomValue % 2 == 0) {
      document.getElementsByClassName('text-box')[0].style.top = margin;
      document.getElementsByClassName('text-box')[0].style.left = margin;
    } else {
      document.getElementsByClassName('text-box')[0].style.bottom = margin;
      document.getElementsByClassName('text-box')[0].style.right = margin;
    }
   
}

setInterval(showText, 1000);