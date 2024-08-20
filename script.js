

// Exercitiul 1

// let number1 = 6;
// let number2 = 6;

// if (number1 > number2) {
//     console.log(number1)
// } else if (number2 > number1) {
//     console.log(number2)
// } else {
//     console.log('Numerele sunt egale')
// }

//Exercitiul 2

// let number1 = 3;
// let number2 = 7;
// let number3 = '-';

// if (number1 = (typeof number1 !== 'number')) {
//     console.log(number1)
// } else if (number2 = (typeof number2 !== 'number')) {
//     console.log(number2)
// } else if (number3 !== NaN) {
//     console.log(number3)
// }
// else {
//     console.log('Everything is a number')
// }

//Exercitiul 3

// let a = 0;
// let b = -1;
// let c = 4;


// if (a < b && b < c) {
//     console.log(a, b, c)
// } else if (a < b && b > c) {
//     console.log(a, c, b)
// } else if (b < a && a < c) {
//     console.log(b, a, c)
// } else if (b < a && a > c) {
//     console.log(b, c, a)
// } else if (c < b && b < a) {
//     console.log(c, b, a)
// } else if (c < b && b > a) {
//     console.log(c, a, b)
// }  

//Exercitiul 4

// let a = -5;
// let b = -2;
// let c = -6;
// let d = 0;
// let e = -1;

// if (a > b && a > c && a > d && a > e) {
//     console.log(a)
// } else if (b > a && b > c && b > d && b > e) {
//     console.log(b)
// } else if (c > a && c > b && c > d && c > e) {
//     console.log(c)
// } else if (d > a && d > b && d > c && d > e) {
//     console.log(d)
// } else if (e > a && e > b && e > c && e > d) {
//     console.log(e)
// } else {
//     console.log('Nici o conditie nu este satisfacuta')
// }


//Homework

//Exercitiul 1

// let temperature = 26;

// if (temperature <= 0) {
//     console.log('Inghet')
// } else if (temperature > 0 && temperature <= 10) {
//     console.log('Frig')
// } else if (temperature >= 11 && temperature <= 25) {
//     console.log('Moderat')
// } else if (temperature > 25) {
//     console.log('Cald')
// } else {
//     console.log('Nici o conditie nu este satisfacuta')
// }


//Exercitiul 2

// let day = 8;

// if (day == 1) {
//     console.log('Monday')
// } else if (day == 2) {
//     console.log('Tuesday')
// } else if (day == 3) {
//     console.log('Wednesday')
// }
// else if (day == 4) {
//     console.log('Thursday')
// }
// else if (day == 5) {
//     console.log('Friday')
// }
// else if (day == 6) {
//     console.log('Saturday')
// }
// else if (day == 7) {
//     console.log('Sunday')
// }
// else {
//     console.log('Nu este satisfacuta nici o conditie')
// }


//Exercitiul 3

// let number = 2;

// if (number % 2 === 0) {
//     console.log(number + ' este par')
// } else {
//     console.log(number + ' este impar')
// }

//Exercitiul 4

// let purchaseAmount = 150;

// // calculam discount
// if (purchaseAmount >= 100) {
//     discount = purchaseAmount * 0.1
// }

// //calculam suma cu discount
// let totalAfterDiscount = purchaseAmount - discount

// //adaugam impozitul
// let tax = totalAfterDiscount * 0.05
// finalAmount = totalAfterDiscount + tax

// console.log('Suma final de platit este: ' + finalAmount)


//Exercitiul 5


// let password = "Parolo";

// if (password.length >= 12 &&
//     /[A-Z]/.test(password) &&  // Verifică dacă există cel puțin o literă mare
//     /[a-z]/.test(password) &&  // Verifică dacă există cel puțin o literă mică
//     /\d/.test(password)) {     // Verifică dacă există cel puțin o cifră
//     console.log('Parola foarte sigură');
// } else if (password.length >= 8 &&
//     /[A-Z]/.test(password) &&
//     /[a-z]/.test(password)) {
//     console.log('Parola sigură');
// } else if (/^[a-zA-Z]+$/.test(password) && password.length <= 6) {
//     console.log('Parola slabă');
// } else {
//     console.log('Parola nesigură');
// }


//Exercitiul 6

// function isPrime(num) {


//     if (num <= 1) return false; // Numbers less than two are not prime
//     if (num === 2) return true; // 2 is the only even prime number
//     if (num % 2 === 0) return false; // Eliminate even numbers greater than 2

//     for (let i = 3; i <= Math.sqrt(num); i += 2) {
//         if (num % i === 0) return false;
//     }

//     return true;
// }
// console.log(isPrime(2))



// //Exercitiul 7

// let a = 3
// let b = 4
// let c = 5

// if (a + b > c && a + c > b && c + b > a) {
//     console.log('Formeaza triunghi.')
// } else if ((c === Math.sqrt(a ** 2 + b ** 2))) {
//     console.log('Valida T. lui Pitagora.')
// }
// else {
//     console.log('Nu poate fi construit triunghi.')
// }


