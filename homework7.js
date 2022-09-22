//lesson 15

// function min(a,b) {
//   if (a<b)
//   return(a);
//   else 
//   return(b);
// };

// alert(min(2,5));
// alert(min(3,-1));
// alert(min(1,1));



// function userName(name) {
//   name=prompt('introduceti numele si prenumele dvs' ,'');}
// function noName(){
//    alert('Bine, nu va v-om salva numele si prenumele');
// }
// let confirmare= confirm('Putem salva numele si prenumele dvs?');

// if (confirmare) {
// userName();
// }
// else {
// noName();
// }


//program a lu adrian
// function userName(nume) {
//   nume = prompt('Nume Prenume');
// }

// function noName() {
//   alert('asta este');
// }

// let confirmare = confirm('Permiteti salvarea numelui?');        //TEMA PE ACASA 2

// if (confirmare) {
//   userName();
// } else {
//   noName();
// }



// function checkIfConfirm(){
//   let confirmare = confirm('Permiteti salvarea numelui?');
//   return confirmare;
// }

// function noName() {
//    alert('asta este');
//   }

//   function getUserName(nume) {
//       nume = prompt('Nume Prenume');
//     }

// let isConfirm = checkIfConfirm();
// if (isConfirm) {
//   getUserName();
// }
// else {
//   noName();
// }


// function checkAge(age) {
//   return (age >18) ? true :false;
// }
// alert(checkAge(20))

// function pow(x, n) {
//   return x**n;
// }

// alert(pow(3,3));  //modelu lu cojan


// function pow(x,n){
//   let result = 1;
//   // for(let i=n;i>0;i--)
//   while(n)
//   {
//       result *= x; // result *= x <=> result = result * x
//       n--

//   }
//   return result
// }

// alert(pow(3,3));  //modelu lu nicu , cum functioneaza catare in spate js codu


//lesson 14


   //function declaration
// function userName(nume){
//   alert(nume)
// }
    //function expression
// myName = function(nume){
//   alert(nume)
// }

// myName('john')




// function ask(question,yes,no) {
// if (confirm(question)) yes()
// else no()
// }

// function confirmare(){
//   alert('thanks')
// }

// function noConfirm(){
//   alert('va rog sa confirmati')
// }

// ask('aveti 18 ani',confirmare,noConfirm)
