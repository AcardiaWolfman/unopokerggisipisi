var clubs="_of_clubs.svg";
var diamonds="_of_diamonds.svg";
var hearts="_of_hearts.svg";
var spades="_of_spades.svg";
var back="Card_back_12.svg";
var nombre="";
var topeDeck="";
var cartasJ=[];
var cartasM=[];
var nJ=0;
var nM=0;
function overxd(e) {
  e.style="background:#F8B320;";
}
function outxd(e) {
  e.style="background:red;";
}
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // Mientras queden elementos a mezclar...
  while (0 !== currentIndex) {

    // Seleccionar un elemento sin mezclar...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // E intercambiarlo con el elemento actual
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
function mezclarCartas(){
  var arrayCartas=new Array(52);
  var pos=0;
  arrayCartas[pos++]="ace"+clubs;
  for(var i=2;i<11;i++){
    arrayCartas[pos]=i+clubs;
    pos++;
  }
  arrayCartas[pos++]="jack"+clubs;
  arrayCartas[pos++]="queen"+clubs;
  arrayCartas[pos++]="king"+clubs;
  arrayCartas[pos++]="ace"+diamonds;
  for(var i=2;i<11;i++){
    arrayCartas[pos]=i+diamonds;
    pos++;
  }
  arrayCartas[pos++]="jack"+ diamonds;
  arrayCartas[pos++]="queen"+diamonds;
  arrayCartas[pos++]="king"+diamonds;
  arrayCartas[pos++]="ace"+hearts;
  for(var i=2;i<11;i++){
    arrayCartas[pos]=i+hearts;
    pos++;
  }
  arrayCartas[pos++]="jack"+hearts;
  arrayCartas[pos++]="queen"+hearts;
  arrayCartas[pos++]="king"+hearts;
  arrayCartas[pos++]="ace"+spades;
  for(var i=2;i<11;i++){
    arrayCartas[pos]=i+spades;
    pos++;
  }
  arrayCartas[pos++]="jack"+spades;
  arrayCartas[pos++]="queen"+spades;
  arrayCartas[pos++]="king"+spades;
  return arrayMezclado=shuffle(arrayCartas);
  /*
  Mostrar la baraja barajeada xDDD
  var gg="";
  for(i=0;i<52;i++){
    gg+=arrayMezclado[i]+'\n';
  }
  alert(gg);
  */
}
function recogerCarta(deck,quien){
  if(quien=="J"){
    return cartasJ.push(deck.pop())-1;
  }else {
    return cartasM.push(deck.pop())-1;
  }
}
function agregarCartaA(deck,quien){
  if(quien=="J"){
    var divj=document.getElementById("cartasJ");
    var nmage=document.createElement("img");
    srci=recogerCarta(deck,"J");
    nmage.setAttribute("src","img/"+cartasJ[srci]);
    nmage.setAttribute("height","150px");
    nmage.setAttribute("width","100px");
    if(nJ != 0)//si no es la primera carta  de j tiene class
    {
      nmage.setAttribute("class","nivel");
    }
    nJ++;
    divj.appendChild(nmage);
  }else{
    var divM=document.getElementById("cartasM");
    var nmage=document.createElement("img");
    srci=recogerCarta(deck,"M");
    nmage.setAttribute("src","img/"+cartasM[srci]);
    nmage.setAttribute("height","150px");
    nmage.setAttribute("width","100px");
    if(nM != 0)//si no es la primera carta  de j tiene class
    {
      nmage.setAttribute("class","nivel");
    }
    nM++;

    divM.appendChild(nmage);
  }
}
function iniciar(){
  if(document.getElementById("nombre").value!="" && document.getElementById("nombre").value!=null){
    nombre=document.getElementById("nombre").value;
    var deck=mezclarCartas();
    document.getElementById("bienvenido").style="display:none";
    document.getElementById("menu").style="display:none";
    document.getElementById("juego").style="display:grid";

    agregarCartaA(deck,"J");
    agregarCartaA(deck,"J");
    agregarCartaA(deck,"J");
    agregarCartaA(deck,"M");
    agregarCartaA(deck,"M");
    agregarCartaA(deck,"M");
    topeDeck=deck[45];
    document.getElementById("imgdeck").src="img/"+topeDeck;
    /*
    var divM=document.getElementById("cartasM");
    var nmage=document.createElement("img");
    nmage.src=recogerCarta(deck,"J");
    divj.appendChild(nmage);
    recogerCarta(deck,"J");
    recogerCarta(deck,"J");
    recogerCarta(deck,"J");
    recogerCarta(deck,"M");
    recogerCarta(deck,"M");
    recogerCarta(deck,"M");*/
  }else{
    document.getElementById("nnom").style="display:block";
  }
}
