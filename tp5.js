let mb = [];
let texto = [];
let j;
function setup() {
createCanvas(600,600);
j = new Juego(mb,texto);
}


function draw() {
j.dibujar(mb,texto);
j.actualizar();
j.time();

}
function keyPressed() {
 j.teclado(); 
}
function preload() {
 for (let i = 0 ; i < 10; i++){
 mb[i] = loadImage('assets/mb'+ i +'.png');
for (let x = 0 ; x < 8; x++){
 texto = loadStrings('assets/texto.txt');
 }
}
}
