
var a = 5;
var hero;
var enemy;
var projektil;
var score = 0;
var scale = 1;


function Pressed(){
  if(keyIsDown(LEFT_ARROW)){
    hero.velocity = -scale;
  }
  else  if(keyIsDown(RIGHT_ARROW)){
    hero.velocity = scale;
  }else  hero.velocity = 0;
  if(keyIsDown(32)) // 32 is space key
      projektil.push(new projectile);
}


function setup() {
  height = 500;
  width = 500;
  scale = 2 + height/1000;
  createCanvas(width, height);
  hero = new Hero();
  enemy = [];
  projektil = [];
}

function draw (){
  background(21);
  Pressed();
  if(frameCount%40==0){
    enemy.push(new Enemy());
  }
  for (var i = 0; i < enemy.length; i++){
    // show the enemy cubes
    enemy[i].update();
    enemy[i].show();
    // delete enemy cubes if they go too low on the screen
    if (enemy[i].y > height + 25) {
      enemy.splice(i,1);
    }
  }
  
  for(var i = 0; i < projektil.length; i++){
    for (var j = 0; j < enemy.length; j++){
      // delete on hit
      if(projektil[i].x<=enemy[j].x+enemy[j].Size && projektil[i].x >= enemy[j].x &&
         projektil[i].y <= enemy[j].y-enemy[j].Size+4 ){
          enemy.splice(j,1);
          score++;
      }
    }
  }
  hero.update();
  hero.show();

  for(var i = 0; i < projektil.length; i++){
    projektil[i].update();
    projektil[i].show();
    if(projektil[i].y < -10)
      projektil.splice(i,1);
  }
  stroke(255);
  text(score, width/2, height/4);
}
