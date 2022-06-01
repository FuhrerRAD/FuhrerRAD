///Primeiro arquivo no repositório:

let Xbol = 325
let Ybol = 200
let Dbol = 30
let Rbol = Dbol/2
let velXbol = 8
let velYbol = 8

let hit = false
let ChanceErro = 0

let PontosEsquerda = 0
let PontosDireita = 0

let Xraqe = 5
let Yraqe = 150

let Xraqd = 635
let Yraqd = 150
let velYraqd

let Lraq = 10
let Araq = 100

let raquetada
let ponto
let trilha

function preload(){
  raquetada = loadSound("raquetada.mp3")
  ponto = loadSound("ponto.mp3")
  trilha = loadSound("trilha.mp3")
}

function setup() {
  createCanvas(650, 400)
  trilha.loop()
}

function draw(){
  background (0)
  Bolinha_Corpo_Movimentação_Bordas ()
  Raquetes_Corpo (Xraqe, Yraqe)
  Raquetes_Corpo (Xraqd, Yraqd)
  Raquete_Esquerda_Movimentação ()
  //Raquete_Esquerda_Colisão ()
  Raquetes_Colisão_Biblioteca (Xraqe, Yraqe)
  Raquetes_Colisão_Biblioteca (Xraqd, Yraqd)
  Raquete_Direita_Movimentação ()
  CalculaErro ()
  //Jogo_Multiplayer ()
  Placar ()
  MarcarPontos ()
  SoluçãoBolinha ()
}

function Bolinha_Corpo_Movimentação_Bordas(){
  
  circle (Xbol, Ybol, Dbol)
  Xbol += velXbol
  Ybol -= velYbol
  if (Xbol+Rbol > 650 || Xbol-Rbol < 0) {velXbol *= -1}
  if (Ybol+Rbol > 400 || Ybol-Rbol < 0) {velYbol *= -1}
  
}

function Raquetes_Corpo(x,y){
  
  rect (x, y, Lraq, Araq)
  
}

function Raquete_Esquerda_Movimentação () {
  
  if (keyIsDown(UP_ARROW)) {Yraqe -= 5}
  if (keyIsDown(DOWN_ARROW)) {Yraqe += 5}

}

function Raquete_Esquerda_Colisão(){
  
  
  if (Xbol - Rbol < Xraqe + Lraq && Ybol - Rbol < Yraqe + Araq && Ybol + Rbol > Yraqe) {velXbol *= -1; raquetada.play()}

}

function Raquete_Direita_Movimentação (){
  
  velYraqd = Ybol - Yraqd - Araq/2 - 30
  Yraqd += velYraqd + ChanceErro
  CalculaErro()
  
}

function Jogo_Multiplayer (){
  
  
if (keyIsDown(87)) {Yraqd -= 5}
if (keyIsDown(83)) {Yraqd += 5}
}

function Raquetes_Colisão_Biblioteca (x,y){
  
  hit = collideRectCircle(x ,y , Lraq, Araq, Xbol, Ybol, Rbol)
  if (hit){velXbol *= -1; raquetada.play()}

}

function Placar (){
  
  stroke(255)
  textAlign(CENTER)
  textSize(30)
  fill(color(0,191,255))
  rect(155,5,40,30)
  fill(255)
  text(PontosEsquerda, 175, 30)
  fill(color(0,191,255))
  rect(455, 5, 40, 30)
  fill(255)
  text(PontosDireita, 475, 30)
  
}

function MarcarPontos (){
  
  if (Xbol + Rbol > 650){PontosEsquerda += 1; ponto.play()}
  if (Xbol - Rbol < 0){PontosDireita +=1; ponto.play()}
}

function CalculaErro (){
  
  if (PontosDireita >= PontosEsquerda){ChanceErro += 1}
  if (ChanceErro >= 39){ChanceErro= 40}
}
function SoluçãoBolinha(){
  if (Xbol-Rbol<0){Xbol = 20}
  if (Xbol+Rbol>650){Xbol = 630}
}
