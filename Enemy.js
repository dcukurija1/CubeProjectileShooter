function Enemy(){
  this.Size = random(7,17);
  this.x = random(2,width-this.Size-2);
  this.y = -4;
  this.velocity = 0.5;

  this.update = function(){
    this.y = this.y + this.velocity;
  }

  this.show = function(){
    noStroke();
    fill(20,200,123);
    rect(this.x,this.y,this.Size,this.Size);
  }
}
