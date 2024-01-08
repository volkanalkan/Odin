let x = 100 + 50
let y = a - b
let z = (100 + 50) * z
num = 100 / 20
modulus = 50 % 5
modulus = modulus++
modulus = modulus--

/* Exponentiation */
2 ** 4 // -> 2 to the power of 4
Math.pow(2, 4) // same as above
let float = 0.2 ** 0.4
// -2 ** 4 -> impossible
let minusEx = (-2) ** 4 // to make it possible
// or
let minusEx2 = -(2 ** 4)

let a = 3.14 // A number with decimals
let b = 3 // A number without decimals
let c = 123e5 // 12300000
let d = 123e-5 // 0.00123
let g = 999999999999999 // g will be 999999999999999
let h = 9999999999999999 // h will be 10000000000000000

// Floating point arithmetic is not always 100% accurate:
let fl = 0.2 + 0.1
// To solve the problem above, it helps to multiply and divide:
let flCorrected = (0.2 * 10 + 0.1 * 10) / 10

/*
WARNING !!
JavaScript uses the + operator for both addition and concatenation.
Numbers are added. Strings are concatenated.
*/

let num1 = 10
let num2 = 20
let sum = num1 + num2

let s1 = "10"
let s2 = "20"
let sSum = s1 + s2

// If you add a number and a string, the result will be a string concatenation:

let num = 10
let s = "20"
let summation = num + s // "1020"

// A common mistake is to expect this result to be 30:

ex1 = 10
ex2 = 20
res = "The result is: " + ex1 + ex2 // The result is: 1020
// res = "The result is: " + (ex1 + ex2) // The result is: 30

// A common mistake is to expect this result to be 102030:
let m1 = 10
let m2 = 20
let m3 = "30"
let result = m1 + m2 + m3 // 3030 (first 30 -> 10+20, second 30 -> string)
