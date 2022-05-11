function projectile(){
  this.x = hero.x+a/2;
  this.y = hero.y;
  this.speed = 5;

  this.update = function(){
    this.y = this.y - this.speed;
  }

  this.show = function(){
    noFill();
    stroke(255);
    strokeWeight(0.5);
    line(this.x,this.y, this.x, this.y-4);
  }
}
