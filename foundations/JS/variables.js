/**************** VARIABLE NAMING ****************/

// There are 2 limitations on variable names in JS:
// 1. The name must contain only letters, digits, or the symbols $ and _
// 2. The first character must not be a digit

let userName //camelCase (commonly used)
let test123
let $ = 1
let _ = 2
alert($ + _)

// let 1a --> cannot start with a digit
// let my-name --> hyphens '-' aren't allowed in the name

let apple
let APPLE

let имя = "..."
let 我 = "..."

// let let --> can't name a reserved variable!
// let class --> can't name a reserved variable!
// let return --> can't name a reserved variable!
// let function --> can't name a reserved variable!

num = 5 // no "use strict" works without strict mode
alert(num)

// to open up the strict mode:
// "use strict";

/**************** CONSTANTS ****************/

// To declare a constant (unchanging) variable, use const instead of let:
const myBirthday = "27.08.2001"

// myBirthday = "01.01.2001" --> error, can't reassign the constant!

const COLOR_RED = "#F00"
const COLOR_GREEN = "#0F0"
const COLOR_BLUE = "#00F"
const COLOR_ORANGE = "#FF7F00"

// just like :root { ... } in css
// ...when we need to pick a color
let color = COLOR_ORANGE
alert(color) // #FF7F00

/* Being a “constant” just means that a variable’s value never changes. But there are constants that are known prior to execution (like a hexadecimal value for red) and there are constants that are calculated in run-time, during the execution, but do not change after their initial assignment. */

//For instance:
const pageLoadTime = 500 // or time taken by a webpage to load
