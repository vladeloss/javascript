// let a = 2 + 1;

// switch (a) {
//   case 3:
//     alert('insuficient');
//     break;
//   case 4:
//     alert('exact');
//     break;
//   default:
//       alert('nu exista astfel de valori');
// }


// let a = '1';
// let b = 0;

// switch(+a) {
//   case b+1:
//     alert('executat');
//     break;
//   default:
//       alert('nu se va executa');
// }


// let a = 2 + 2;

// switch(a) {
//   case 4:
//     alert('corect');
//     break;
//   case 3:
//   case 5:
//     alert('incorect');
//     break;
//   default:
//     alert('rezultat incorect');
// }


// let a = prompt('introduceti numarul', '');

// switch(a) {
//   case '0':
//   case "1":
//     alert('ai introdus 1 sau 0');
//     break;
//   case '2':
//     alert('2');
//     break;
//   case 3:
//     alert('nu se va executa niciodata');
//     break;
//   default:
//     alert('valoare necunoscuta');
// }



for(;;) {
  let a = prompt('introduceti un numar de la 1 la 9' , '')
  switch (+a) {
  case 1:
    alert(3);
    break;
  case 2:
    alert(1);
    break;
  case(3):
   alert(5);
   break;
  case(4):
   alert(2);
   break;
  case(5):
   alert(4);
   break;
  case(6):
   alert(8);
   break;
  case(7):
   alert(9);
   break;
  case(8):
   alert(2);
   break;
  case(9):
   alert(6);
   break;

  default:
    alert('introduceti un numar valid');
  }
  if (a>9) {
    break;
  }
}