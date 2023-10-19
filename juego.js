class Juego {
  constructor() {
    this.raton =  new Ratoncito();
    this.tacos = [];
    this.maxTacos= 6;
    this.interval= 400; //que aparezcan cada
    this.ultimoTiempoAparicion= 0;
    this.tiempo=0;
    this.duracion=20;
    this.jugando=true;
this.puntos= 0;

    
    for (let i=0; i< this.maxTacos; i++) {
      this.tacos.push(new Zapatos()); //array de tacos
    }
    this.estado ="instrucciones";
  }
  dibujar(imgArray,textos) {
    if (this.estado == "instrucciones" ) {
       image(imgArray[7], 0, 0);
      fill(255);
textSize(30);
text (textos[0],250,30);
textSize(20);
text (textos[1],5,70);
text (textos[2],5,80,600);
text (textos[3],5,130,600);
text (textos[4],5,180,600);
text (textos[5],5,260,600);
text (textos[6],150,570,600);

    } else if (this.estado == "jugando" ) {
      image(imgArray[4], 0, 0);
      image(imgArray[5], 0, 0);
      this.raton.dibujar(imgArray);
      for (let i=0; i< this.tacos.length; i++) {
        this.tacos[i].dibujar(imgArray);
      }
    } else if (this.estado == "ganaste") {
      //background (200, 0, 0);
       image(imgArray[9], 0, 0);
    } else if (this.estado == "perdiste" ) {
     // background (0, 200, 0);
       image(imgArray[6], 0, 0);
     textSize(18);
       text (textos[7],10,10,600);
    }
  }
  teclado(imgArray) {
    if (this.estado == "jugando" ) {
      this.raton.flechas(keyCode, UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW);
    }
    if (keyCode=== ESCAPE) {
    if (this.estado=== "instrucciones") {
      this.estado = "jugando";
  }
    }
  }  
  actualizar () {
    if (this.estado == "jugando" ) {
      let tiempoActual = millis();
      if (tiempoActual - this.ultimoTiempoAparicion > this.interval) {
        if (this.tacos.length === this.maxTacos) {
          this.tacos.splice(0, 1);
          this.tacos.push (new Zapatos());
        }
        this.ultimoTiempoAparicion = tiempoActual;
      }
     
    }
    this.raton.colisionConTaco(this.tacos);
  }
  
  time() {
    if (this.estado == "jugando" ) {
      if (this.jugando) {
        this.tiempo += deltaTime / 1000;
        let tiempoRestante = this.duracion - this.tiempo;
        if (tiempoRestante <= 0) {
          this.jugando = false;
          this.estado = "perdiste";
        }
        fill(255);
        textSize(30);
        let tiempoFormateado = nf(tiempoRestante, 1, 1);
        text( "        " + tiempoFormateado, 5, 50);
      }
    }
  }
}
