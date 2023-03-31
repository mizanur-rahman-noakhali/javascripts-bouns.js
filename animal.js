function animalCalculator(depth){
var animal=0;
if(depth<=10){
    animal=depth*50;
}
else if(depth<=20){
    var firstpart=10*50;
    var remaning=depth-10;
    var secondpart=remaning*100;
    animal=firstpart+secondpart;
}
else{
    var firstpart=10*50;
    var secondpart=10*100;
    var remaning=depth-20;
    var thirdpart=remaning*300;
    animal=firstpart+secondpart+thirdpart;
}
return animal;
}

var result=animalCalculator(5);
console.log(result);