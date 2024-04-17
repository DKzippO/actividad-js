let a=10;
let b=5;
a+=1;
console.log(a);
a=a+b;
console.log("a=a+b: " + a);
a=11;
a+=b;
console.log("a+=b: " + a);
a++;
console.log("a++: " + a);
a--;
console.log("a--: " + a);
if (a%2==0)
    console.log("a es PAR");
else
    console.log("a es IMPAR");
console.log(a+b+Number("5"));