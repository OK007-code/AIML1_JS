// console.log("Hello World");
/*var num = 5;
console.log(num);
console.log(typeof(num));
num = false;
console.log(num);
console.log(typeof(num));
num = "Hello World";
console.log(num);
console.log(typeof(num));
num = null;
console.log(num);
console.log(typeof(num));
num = undefined;
console.log(num);
console.log(typeof(num));

const sym1 = Symbol(4);
console.log(sym1);
const sym2 = Symbol(4);
console.log(sym2);
if (sym1 === sym2) {
  console.log("True");
} else {
  console.log("False");
}
var a = 100; var b = 200; var c = 300; var linebreak = "<br>";
document.write("a+b+c=");
result=a+b+c;
document.write(result);
document.write(linebreak);
var a = 10;
var b = 20;
var linebreak = "<br>";
document.write("(a==b)=>");
result = (a<=b);
document.write(result);
document.write(linebreak);
var count;
document.write("Starting Loop"+"<br>");
for(count=1;count<=10;count++){
  document.write("Current Count:"+count+"<br>");
}
document.write("Loop stopped");*/
const person = {
  fname : "Jivisha",
  lmane : "Gupta",
  age : 18,
};
for(let x in person){
  console.log("personal details:"+x+":"+person[x])
}