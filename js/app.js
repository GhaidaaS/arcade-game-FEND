//Canvas dimentions
const width = 430;
const height = 440;

// Enemies our player must avoid
var Enemy = function(x,y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x; ;
    this.y = y ;
    this.speed = Math.floor(Math.random()*4+1);
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position
Enemy.prototype.update = function(dt) {
    //if enemy reach end of canvas go back to start
    if (this.x>=490) {
        this.x=0;
    } 
    else {
        this.x= this.x +dt *20+this.speed;
        this.y=this.y;
    }  
};

//function to check Collisions
Enemy.prototype.checkCollisions=function(){
    let enemyXleftMax=this.x-70;
    let enemyXRightMax=this.x+70;
    let enemyYTopMax=this.y-60;
    let enemyYBottomMax=this.y+60;
    if(player.x>enemyXleftMax&&player.x<enemyXRightMax&&player.y<enemyYBottomMax&&player.y>enemyYTopMax){
        player.x=200;
        player.y=430;
    }
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//player class
var Player = function() {
     this.x= 200;
     this.y= 430;
    this.sprite = 'images/char-horn-girl.png';
};
// Update the player position
Player.prototype.update = function() {
    this.x=this.x;
    this.y=this.y; 
};

// Draw the player on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//functon to handle keybourd Input from player
Player.prototype.handleInput = function(key){
    x=this.x;
    y=this.y;
    switch(key){
        case 'left': moveLeft();
            this.x=x; 
        break;
        case 'right': moveRight();
            this.x=x; 
        break;
        case 'up': moveUp(); 
            this.y=y;
            this.x=x; 
        break;
        case 'down': moveDown();
            this.y=y; 
        break;
    }
    //if player press right arrow key move right
    function moveRight(){
        let newPos=x+20;
        if (!(newPos >= width)) 
            x=newPos;
    }    
    //if player press left arrow key move left 
    function moveLeft(){
        let newPos= x-20;
        console.log(newPos);
        if (!(newPos < 0))
            x=newPos;
    } 
    //if player press up arrow key move up 
    function moveUp(){
        let newPos=y - 20;
        if (!(newPos < 10)) 
            y=newPos;
        else {
            x=200;
            y=430;
        }
    }  
    //if player press down arrow key move down
    function moveDown(){
        let newPos=y+20;
        if (!(newPos >= height)) 
            y=newPos;
    }
        
}

// Now instantiate my objects.
// Place the player object in a variable called player
let player = new Player();
// Place all enemy objects in an array called allEnemies
let allEnemies = [
    new Enemy(100, 50),
    new Enemy(0, 150),
    new Enemy(300, 200)
];

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
