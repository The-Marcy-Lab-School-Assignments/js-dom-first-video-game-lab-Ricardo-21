let square = document.getElementById("square");
console.log(square.style.left, square.style.top);

const gameBox = document.querySelector('#game');

function keyPress(e) { // Moves the square around the play area
  console.log(e.key)
  if (e.key === 'ArrowUp' && square.style.top !== '0px'){
    let num = parseInt(square.style.top);
    num -= 10;
    square.style.top = num + 'px';
  }

  if (e.key === 'ArrowDown' && square.style.top !== '300px'){
    let num = parseInt(square.style.top);
    num += 10;
    square.style.top = num + 'px';
  }

  if (e.key === 'ArrowLeft' && square.style.left !== '0px'){
    let num = parseInt(square.style.left);
    num -= 10;
    square.style.left = num + 'px';
  }

  if (e.key === 'ArrowRight' && square.style.left !== '300px'){
    let num = parseInt(square.style.left);
    num += 10;
    square.style.left = num + 'px';
  }

  //'eat' the enemy collision
  let enemy = document.querySelector('#enemy');
  let sqSty = square.style;

  if (enemy !== null){
    let enSty = enemy.style;
    if(parseInt(sqSty.top) <= parseInt(enSty.top) + 50 && parseInt(sqSty.top) + 50 >= parseInt(enSty.top) && parseInt(sqSty.left) <= parseInt(enSty.left) + 50 && parseInt(sqSty.left) + 50 >= parseInt(enSty.left)){
      enemy.remove();
    }
  }
}


document.addEventListener("keydown", keyPress);

function generateRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

square.addEventListener('click', function () { // The square gets a random color!

  square.style.backgroundColor = generateRandomColor();

});

function generateEnemy() { //generates enemy at random location 
  if(document.querySelector('#enemy') !== null){ // checks to see if an enemy is already there
    document.querySelector('#enemy').remove();
  }

  const enemy = document.createElement('div');
  enemy.id = 'enemy';
  enemy.style.height = '50px';
  enemy.style.width = '50px';
  enemy.style.position = 'absolute';
  enemy.style.backgroundColor = 'white';
  
  gameBox.append(enemy);

  function randPx(){
    return Math.floor(Math.random()*300) + 'px';
  }
  enemy.style.top = randPx();
  enemy.style.left = randPx();
}

//button!
const button = document.createElement('button');
button.innerText = 'Generate Enemy';

const body = document.querySelector('body');

button.style.alignText = 'center';
button.style.marginTop = '20px'

button.addEventListener('click', function(){
  generateEnemy();
});


const keepMovingButt = document.createElement('button');
keepMovingButt.innerText = 'Push for cake';
keepMovingButt.style.alignText = 'center';
keepMovingButt.style.marginTop = '10px'

body.appendChild(button);
body.appendChild(keepMovingButt);

keepMovingButt.addEventListener('click', function(){
  game.style.backgroundImage = 'url(https://media.giphy.com/media/3oKIPBxpm5tHqcL1Ic/giphy.gif)';
  game.style.backgroundRepeat = 'no-repeat';
  game.style.backgroundSize = 'cover';
});


