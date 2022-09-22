const number = +prompt('Va rugam sa introduceti un numar intre 0 si 3', '');

switch(number) {
  case 0 :
    alert('Ai introdus numarul 0');
    break;
  case 1:
    alert('Ai introdus numarul 1');
    break;
  case 2:
  case 3:
    alert('ai introdus numarul ' + number); // sau putem folosi `Ai introdus ${number}`
    break;
  default:
    alert('numarul nu este intre 0 si 3');
    break
}