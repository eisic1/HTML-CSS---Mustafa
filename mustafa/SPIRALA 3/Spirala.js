//ZADATAK 3

//funkcija koja sakrije predmete prve godine
function sakrijPrvi(){
  var x = document.getElementById('predmeti1');
  x.style.display = 'none';
}

//funkcija koja sakrije predmete druge godine
function sakrijDrugi(){
  var x = document.getElementById('predmeti2');
  x.style.display = 'none';
  
}

//funkcija koja prikazuje sve predmete
function sviPredmeti(){
  var x = document.getElementById('predmeti1');
  if (x.style.display === 'none') {
    x.style.display = 'block';
  }

  var y = document.getElementById('predmeti2');
  if (y.style.display === 'none') {
    y.style.display = 'block';
  }
}

//ZADATAK 2

var element = new Array(7);

element[0] = document.getElementById("mur_1");
element[1] = document.getElementById("uup");
element[2] = document.getElementById("fwt");
element[3] = document.getElementById("ubp");
element[4] = document.getElementById("asp");
element[5] = document.getElementById("wt");
element[6] = document.getElementById("vvs");

function sortiraj(){
  element.sort();
  document.getElementByClassName("container").innerHTML = points;
}

/*function sortiraj(){
  var element = new Array[];
  var pom = 0;

  for(var i=0; i<4; i++){
    element[i] = document.getElementByClass("test" + pom);

    pom++;
  }

  element.sort();
  document.getElementById("predmeti1").innerHTML = element;

}*/

/*function sortiraj(y){
  var x = document.getElementByClass
  var niz = ["a", "b", "c", "d"];
  document.getElementById("predmeti1").innerHTML = niz;
  niz.sort();
  document.getElementById("predmeti1").innerHTML = niz;
}*/

//ZADATAK 1

//funkcija koja uvecava sliku kada misem predjemo preko nje
function uvecano(x) {
  x.style.height = "340px";
  x.style.width = "320px";
}

//funkcija koja vraca sliku na normalnu velicinu kada mis pomjerimo sa slike 
function normalno(x) {
  x.style.height = "192px";
  x.style.width = "108px";
}

//ZADATAK 4

//Funkcija oboji i funkcija standardno se mogu pozivat nad redovima gdje je samo jedan profesor
//u ovom slucaju
function oboji(x){
    x.style.background='yellow';
}

function standardno(x) {
  x.style.background = 'white';
}

//ove funckije u jQuery, sluze za bojenje redova ako jedan profesor predaje vise predmeta
$(document).ready(function() {
  $(".zeljko").on('mouseover', function() {
    $(".zeljko").css('background-color', 'yellow');
  });
  $(".zeljko").on('mouseout', function() {
    $(".zeljko").css('background-color', 'white');
  });
});

$(document).ready(function() {
  $(".vedran").on('mouseover', function() {
    $(".vedran").css('background-color', 'yellow');
  });
  $(".vedran").on('mouseout', function() {
    $(".vedran").css('background-color', 'white');
  });
});

$(document).ready(function() {
  $(".emir").on('mouseover', function() {
    $(".emir").css('background-color', 'yellow');
  });
  $(".emir").on('mouseout', function() {
    $(".emir").css('background-color', 'white');
  });
});

$(document).ready(function() {
  $(".vensada").on('mouseover', function() {
    $(".vensada").css('background-color', 'yellow');
  });
  $(".vensada").on('mouseout', function() {
    $(".vensada").css('background-color', 'white');
  });
});