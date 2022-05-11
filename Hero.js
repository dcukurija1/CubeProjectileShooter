
function Hero(){
  this.x = width/2;
  this.y = height-height/5;
  this.velocity = 0;
  
  this.update = function(){

    this.x = this.x + this.velocity;
    if(this.x < 0){

      this.x = 0;
      this.velocity = 0;

    }else if(this.x >=width-5){

        this.x = width-5;
        this.velocity = 0;
    }
  }

  this.show = function(){

    noStroke();
    fill(200,200,230);
    rect(this.x,this.y, a,a);
  }
}
