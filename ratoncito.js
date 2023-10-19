class Ratoncito {
  constructor() {
    this.x= width/2;
    this.y= height/2;
    this.ancho=80;
     this.alto=142;
    this.velocidad = 8;
    this.limiteY=20;
  }
  flechas(teclas) {
    if (keyCode === UP_ARROW && this.y > this.limiteY) {
      this.y -=  this.velocidad;
      image(imgArray[2], this.x, this.y );
    } else if (keyCode === DOWN_ARROW) {
       this.y  +=  this.velocidad;
     // image(imgArray[8], this.x,  this.y );
    } else if (keyCode === LEFT_ARROW ) {
      this.x -=  this.velocidad;
      //image(imgArray[3], this.x, this.y );
    } else if (keyCode === RIGHT_ARROW) {
      this.x += this.velocidad;
      //image(imgArray[1], this.x,  this.y );
    }
  
 this.x = constrain(this.x,0, width - this.ancho);
  this.y = constrain( this.y,this.limiteY, height -  this.alto); 
  } 
  
  dibujar (imgArray) {
    image(imgArray[1], this.x, this.y, this.ancho,this.alto);
    fill(255);
    text("Puntos: ", 100,100);
  }
  colisionConTaco(enemigos) {
    let distanciaColision = 30 ;
    for ( let i = 0; i < enemigos.length; i++ ) {  //recorro cada posicion de la lista
      let distanciaTacoRaton = dist( this.x, this.y, enemigos[i].x, enemigos[i].y, enemigos[i].size );
      //
      if ( distanciaTacoRaton < distanciaColision ) {
        this.estado = "ganaste"
         //this.puntos++;
    
      }
    }
  }
    
 //getpuntos(){
 //  return this.puntos;
 //}
  

  
}
