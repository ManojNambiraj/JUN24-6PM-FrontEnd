// ES5 -> Ecma script 5

// 1. var

// ES6 -> Ecma script 6

// 2. let

// 3. const

// Hoisting

// var a = 10;

// var a = 15;

// console.log(a);

// let b = 100;

// b = 200;

// b = 500;

// console.log(b);

// const c = 20;

// console.log(c);

// Scopes

// 1. Local scope -> let, const
// 2. Global scope -> var

// var a = 20;

// {
//    {
//     let b = 50;
//      {
//         {
//             console.log(a);
//             console.log(b);
//         }
//      }

//      console.log(a);

//    }

// }

// Operators:

// 1. Arithmetic op

// +, -, *, /, **, %, ++, --

// ** ---> Exponentiation

// ++, -- ---> Prefix, postfix

// Addition op:

// var a = 10;
// var b = 5;
// var c;

// // ++a;
// c = --a;

// console.log(c);

// 2. Assignment op

// =, +=, -=, *=, /=, %=, **=

// var a = 10;

// // a += 5;        // a = a + 5;
// a -= 5;        // a = a - 5;

// console.log(a);

// 3. Comparision op

// ==, ===, !=, !==, >, <, >=, <=

// Boolean -> True, False

// var a = 10;
// var ans;

// ans = (a < 10);

// console.log(ans);

// 4. Logical

// &&,

// true && true => true
// false && true => false
// true && false => false
// false && false => false

// ||,

// true || true => true
// false || true => true
// true || false => true
// false || false => false

// !

// true ---> false
// false ---> true

// var a = 10;
// var ans;

// ans = (a < 7) || (a != 10)

// console.log(!ans);

// 5. Bitwise op

// &, |, ~, ^, <<, >>

// var a = 8;
// // var b = 5;

// var answer = a >> 2;

// console.log(answer);

// 6. Ternary op

// var ans = (5 < 2) ? "Yes" : "Noooo";

// console.log(ans);

// 7. Type op

// var a = "hello";

// console.log(typeof a);

// JS Functions:

// 1. Normal function

// function foo(n, a) {
//   return n * a;
// }

// var result = foo(5, 2);

// console.log(result);

// 2. Ananymous Function

// let arr = function() {
//     console.log("Its my Ananymous");
// }

// arr()

// 3. Arrow function

// const arr = () => console.log("Its my Arrow function");

// arr()

// 4. IIFE Function -> (Immediatly Invoked Function Expression)

// (()=>{
//     console.log("Its IFIE Function");
// })()

// DRY -> Don't repeat your code


// Calling the function through HTML

var balance = 1000;

const bankAccount = (amt) => {
    
    balance += amt;

    console.log(balance);
}

const handleClick = () => {
   alert("Hello It's clicked");
}