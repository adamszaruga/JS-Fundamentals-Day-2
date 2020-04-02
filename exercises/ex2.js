// Run this file using the following command:
//       node ex2.js <any_word>
// Where <any_word> is any alphanumeric word

// This block of code checks to see if you provided a string for <any_word>
if (process.argv.length < 3) {
    console.log('You forgot to type a word!')
    process.exit(1)
}

// This line of code takes <any_word> and saves it to a variable.
// Use this variable in your code!
const anyWord = String(process.argv[2])
console.log('any_word: ', anyWord)

/********************
Exercises
*********************/


// Replace 'false' below with a condition that makes 'repeat!' log 10 times
let i = 0;
while (false) {
    console.log('repeat!');
    i++;
}

// Replace 'j++' below with a line of code that makes 'also repeat!' log 3 times instead of 6.
let j = 0;
while (j < 6) {
    console.log('also repeat!')
    j++;
}

// Write a while-loop that logs anyWord as many times as there are letters in the word
// HINT: you can use "anyWord.length" to get the # of letters in the word
