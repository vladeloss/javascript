// alert(true|| false);
// alert(false|| true);
// alert(true|| true);
// alert(false|| false);

// if ( 1 || 0) {
//   alert(true);
// }

// let hour = 9;
// if (hour < 10 || hour >18) {
//   alert('go to work!')
// }

// alert (1 || 0); // 1
// alert (true || 'hello') //true
// alert (null || 1); //1
// alert(null || 0 || 1); //1
// alert(undefined || null || 0); // 0 --> este ultimul


// let currentUser = null;
// let defaultUser = 'John';
// let name = currentUser || defaultUser;
// alert(name);

// let x;
// true || (x = 1); // undifinied pt ca se opreste la true
// alert(x);

// alert (true && true); //true
// alert (false && true); // false
// alert (true && false); // false 
// alert (false && false); // false

// let hour = 12;
// let minute = 30 ;
// if (hour == 12 && minute == 30) {
//   alert ('the time is 12:30')
// }

// if ( 1 && 0) {
//   alert ('hello')
// }

// alert ( 1 && 0) // 0
// alert ( 1 && 5) // 5
// alert( null && 5) //null
// alert( 0 && 'hello') //0

// alert ( 1 && 2 && null && 3) //null
// alert(1 && 2 && 3) // 3

// let x = 1;
// ( x > 0) && alert (" greater then 0");

// alert( !true); //false
// alert(!0); //true

// alert(!!'');//false
// alert(!!'hello');//true
// alert(!!null); // false
// alert(!!undefined);// false
// alert(!!0)//false
// alert(!!'0')//true
// alert(!!NaN); //False
// alert(!!Number()); // false


// alert(!'');//true
// alert(!'hello');//false
// alert(!null); // true
// alert(!undefined);// true
// alert(!0)//true
// alert(!'0')//false
// alert(!NaN); //true
// alert(!Number()); // true

// let result = NaN && !!(0 || true) && 'hello'
// alert(result); 

// let user ;
// alert (user ?? 'john');

// let user = 'I';
// alert(user ?? 'john');

// let firstName = null;
// let lastName = null;
// let nickName = '';
// alert(firstName ?? lastName ?? nickName ?? 'John');
// alert(firstName || lastName || nickName ?? 'john' );

// let height = 0;
// alert( height ?? 100);
// alert( height || 100);

// let height = null;
// let weight = null;
// let area = (height??100) * (weight??250)
// alert(area)