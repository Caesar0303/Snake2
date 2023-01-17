let world = document.getElementById('world');
let snake = document.getElementById('snake');
let food = document.getElementById('food');
x = 0;
y = 0;



function drawFood () {
    food.style.left = '300px'
    food.style.top = '0px'
}


function updateSnake () { 
    if(x<0) {
        x = 400;
    }
    if(x > 400) {
        x = 0;
    }
    if(y < 0) {
        y = 400;
    }
    if(y > 400) {
        y = 0;
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function onKeyDown (event) {
    
    function right () {if (event.code == 'KeyD') {
        x = x + 20;
        snake.style.left = x + 'px';
        if (snake.style.left == food.style.left && snake.style.top == food.style.top) {
            food.style.left = getRandomInt(20) * 20 + 'px';
            food.style.top = getRandomInt(20) * 20 + 'px';
        }
    }}
    
    function up () {if (event.code == 'KeyW') {
        y = y - 20;
        snake.style.top = y + 'px';
        if (snake.style.left == food.style.left && snake.style.top == food.style.top) {
            food.style.left = getRandomInt(20) * 20 + 'px';
            food.style.top = getRandomInt(20) * 20 + 'px';
        }
    }}

    function down () {if (event.code == 'KeyS') {
        y = y + 20;
        snake.style.top = y + 'px';
        if (snake.style.left == food.style.left && snake.style.top == food.style.top) {
            food.style.left = getRandomInt(20) * 20 + 'px';
            food.style.top = getRandomInt(20) * 20 + 'px';
        }
    }}

    function left () {if (event.code == 'KeyA') {
        x = x - 20;
        snake.style.left = x + 'px';
        if (snake.style.left == food.style.left && snake.style.top == food.style.top) {
            food.style.left = getRandomInt(20) * 20 + 'px';
            food.style.top = getRandomInt(20) * 20 + 'px';
        }
    }}
    function move() {
        setInterval(right,400)
    }
    move()
}

drawFood()
document.addEventListener('keyup', onKeyDown)
setInterval(updateSnake, 1);
