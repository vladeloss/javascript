//lesson 16

let ask = (question, yes, no) => confirm(question) ? yes() : no();



ask(
    "Ești de acord?",
    () => alert("Ați fost de acord."), 
    () => alert("Ați anulat execuția.")
  );

// let ask = (question, yes, no) => {
// confirm('esti de acord') ? alert('ati fost de acord')
// : alert('ati anulat executia');
// }
// ask();