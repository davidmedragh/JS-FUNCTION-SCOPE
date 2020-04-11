const readline = require('readline-sync');
var ohai = 'Hello world !';

function sayHello() {
    console.log(ohai);
}

sayHello();

// should not be done as this two var only used under calculate should be declared locally 

var var1 =2,
    var2=3;
function calculate() {
    console.log('Should not be used anymore ==> result is ' + var1 * var2)
}
calculate();

// correct way for calculate function
function calculate2() {
    var var1 =6,
    var2=3;
    console.log('can be used ==> result is ' + var1 * var2)
}
calculate2();

function moar(first, second) {
    // On peut maintenant utiliser les variables « first » et « second » comme on le souhaite :
    console.log('Votre premier argument : ' + first);
    console.log('Votre deuxième argument : ' + second);
    return arg1 * arg2;
}

var inputData='';
var arg1 = readline.question('give your first arg==> '); 
var arg2 = readline.question('give your second arg==> ');
//process.stdin.on('Entrez votre premier argument :',arg2);
var returned_value=moar(arg1,arg2);
console.log(returned_value);

//Les fonctions anonymes, Anonymous Functions {Immediately-Invoked Function }
var sayHello = function(){
    console.log('anonymous function')
    return 10;
};
sayHello();
console.log(sayHello());
(function() {
    console.log('imediate execution ');
})();

(function fonction() {
    console.log('imediate execution for non anonymous function');
})();

console.log('Debut exemple pour montrer la notion de zone isolée');
var test = 'noir';// global var containing noir
var globalTest='external Value';
console.log('globalTest value is outside before  the isolated zone code execution==>'+globalTest);
console.log('Hors de la zone isolée la couleur est  ' +test);
(function() { //debut de la zone isolée
    
    var test = 'blanc'; //on crée une variable du mem nom avec le contenu blanc dans la zone isolée
    console.log('dans la zone isolée la couleur est  ' +test);
    globalTest = 'value given iside isolated zone';
    console.log('globalTest value is inside the isolated zone==> '+globalTest);

})(); //Fin de l zone isolée with var created inside destroyed
console.log('globalTest value is outside after  the isolated zone code execution==>'+globalTest);

var sayHello = function() {

    return 'Yop !';

};

console.log(sayHello); // Affiche : « [Function: sayHello] » ref to this function

var sayHello = (function() {

    return 'Yop !';

});

console.log(sayHello); // Affiche : « [Function: sayHello] » ref to this function

//naming and imediate execussion
var sayHello = (function() {

    return 'Yop !';

})();

console.log(sayHello); // Affiche : « Yop ! »


