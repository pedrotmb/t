class Zapatos {
  constructor() {
  this.size= random(20,80);
  this.x= random(this.size,width -this.size);
   this.y= random(100,height -this.size-80);
   this.colision =false;
  }
  dibujar(imgArray) {
    this.x =constrain(this.x,this.size,width - this.size);
    this.y=constrain(this.y,this.size,height - this.size-80);
    if (!this.colision) {
   image(imgArray[0],this.x,this.y, this.size,this.size); 
    }
  }
}
  
