// function HELLO() {
//   alert("hello");
// }
// HELLO();\

function pow(x,n)
{
let result=1;
for(let i=0;i<n;i++) {result*=x;}
return result;
}
let x=prompt("x?",""), n=prompt("n?","")
if (n<=0)
{
alert("Gradul ${n} nu este acceptat, introduceți un grad întreg mai mare decât 0");
}
else
{
alert(pow(x,n))
}