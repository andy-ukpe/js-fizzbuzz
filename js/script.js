// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli
// di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

// SCRIVERE UN PROGRAMMA CHE STAMPI numeri
// creo variabili
// var numero = 0;
// var lista = document.getElementById('lista-item');
// var testo;
//
// for (var i = 0; i < 100; i++) {
//   // creare numeri da 1 a 100
//   numero = numero + 1;
//   // stampare numeri
//   var itemLista = lista.innerHTML;
//   lista.innerHTML = itemLista + '<li>' + numero + '</li>';
//   // scrivere vicino ai multipli di 3 Fizz
//   if( (numero % 3 == 0) && !( numero % 5 == 0 ) ){
//     // scrivere Fizz
//     testo = ' Fizz';
//     lista.innerHTML = itemLista + '<li>' + testo + '</li>';
//   } else if( (numero % 5 == 0 ) && !( numero % 3 == 0 )){// scrivere vicino ai multipli di 5 Buzz
//     // scrivi Buzz
//     testo = ' Buzz';
//     lista.innerHTML = itemLista + '<li>' + testo + '</li>';
//   } else if (( numero % 3 == 0) && ( numero % 5 == 0 )) {
//     // scrivi Fizz Buzz
//     testo = ' FizzBuzz';
//     lista.innerHTML = itemLista + '<li>' + testo + '</li>';
//   }
// }

var lista = document.getElementById('lista-item');


for (var i = 1; i <= 100; i++) {
  // creare numeri da 1 a 100
  var numero = i;
    var itemLista = lista.innerHTML;
  // stampare numeri
  // scrivere vicino ai multipli di 3 Fizz
  if ( numero % 15 == 0) {// scrivere vicino ai multipli di 15 FizzBuzz
    numero = 'FizzBuzz';
  } else if ( numero % 3 == 0 ) {
    // scrivere Fizz
    numero = 'Fizz';
  } else if( numero % 5 == 0 ) {// scrivere vicino ai multipli di 5 Buzz
    // scrivi Buzz
    numero = 'Buzz';
  } else {
    numero = numero
  }

  lista.innerHTML = itemLista + '<li>' + numero + '</li>';
}
