// let company = prompt (' Care este numele oficial pentru JS?')

// if (company == 'ECMAScript') {
//   alert('corerct')
// }
// else [
//   alert('Nu știi? ECMAScript!')
// ]



// let number = prompt("Scrie un numar");

// if (number > 0 ) {
// alert(1);
// }
// else if (number < 0 ) {
//   alert(-1);
// }
// else {
//   alert(0);
// }



//  let result = prompt('cat va fi a + b');
// let a == 1;
// let b == 2;
// result = (a + b < 4) ? ('Putin') 
// : ( 'Mult');
// alert(result)


let login = prompt('Autentificare', '' );
 let message = (login == 'Angajat') ? 'buna'
: (login == 'Director') ? "Buna ziua"
: (login == '') ? 'Fără autentificare'
: '';
alert(message);
