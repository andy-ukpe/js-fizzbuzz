// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli
// di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

// SCRIVERE UN PROGRAMMA CHE STAMPI numeri
// creo variabili
var numero = 0;
var lista = document.getElementById('lista-item');

for (var i = 0; i < 100; i++) {
  // creare numeri da 1 a 100
  numero = numero + 1;
  // stampare numeri
  console.log(numero);
  var itemLista = lista.innerHTML;
  lista.innerHTML = itemLista + '<li>' + numero + '</li>';
  // scrivere vicino ai multipli di 3 Fizz
  if( numero % 3 == 0 ){
    // scrivi Fizz
    lista.innerHTML = itemLista + '<li>' + numero + ' Fizz' + '</li>';
  } else if( numero % 5 == 0 ){// scrivere vicino ai multipli di 5 Buzz
    // scrivi Fizz
    lista.innerHTML = itemLista + '<li>' + numero + ' Buzz' + '</li>';
  }
}
