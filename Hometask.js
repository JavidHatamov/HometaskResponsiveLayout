alert("Hi,Anton");
alert("This is 1st task!");
alert("Please add two numbers:");
const a=+prompt("First number:a");
const b=+prompt("Second number:b");
const division=a/b;
const remainder=a%b;
const pureresult=(a-remainder)/b;
alert(`The result of division is ${division} and remainder is ${remainder} and pureresult is ${pureresult} !`);
alert("This is 2nd task!");
let A=+prompt("First input:");
let B=+prompt("Second input:");
let swap=0;
swap=A;
A=B;
B=swap;
alert(`After swapping, we get first input is ${A} and second input is ${B} !`);
alert("Third task...");
alert("Please add 3 non-zero numbers (A1, B1, C1)!");
const A1=+prompt("A1 is");
const B1=+prompt("B1 is");
const C1=+prompt("C1 is");
if(A1!=0 && B1!=0 && C1!=0){
const X=(C1-B1)/A1;
alert(`Solution of this equation is ${X}`);
}
else{
alert("Error! You must add 3 non-zero numbers!");
}
alert("Fourth task...");
alert("Please add two numbers");
const a1=+prompt("First number :");
const b1=+prompt("Second number :");
let Result;
if(a1>b1){
Result=a1+b1;
}
else if(a1===b1){
Result=a1*b1;
}
else if(a1<b1){
Result=a1-b1;
}
alert(`Result is ${Result}`);
alert("Fifth task...");
alert("Please add three numbers");
const a2=+prompt("First number :");
const b2=+prompt("Second number :");
const c2=+prompt("Third number :");
let Discriminant=(b2*b2-4*a2*c2);
alert(`${Discriminant}`);
let Top=Math.sqrt(Discriminant);
const X1=((-1)*b)+Top/(2*a2);
const X2=((b*(-1))+Top*(-1))/(2*a2);
if(Discriminant>0){
alert(`Solution of this eqaution is ${X1} and ${X2} !`);
}
else if(Discriminant===0){
alert(`Solution of this equation is ${X1}`);
}
else if(Discriminant<0){
alert("There is no solution!");
}





alert("Seventh task is coming...");
alert("Please add three numbers...");
const x=+prompt("First number :");
const y=+prompt("Second number :");
const r=+prompt("Third number :");
if(r*r<x*x+y*y){
alert("Yes, the point is inside of the circle!");
}
else{
alert("No, this point is not inside of the circle!");
}

