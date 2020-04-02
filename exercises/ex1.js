// Run this file using the following command:
//       node ex1.js <any_number>
// Where <any_number> is any positive whole number

// This block of code checks to see if you provided a number for <any_number>
if (process.argv.length < 3) {
    console.log('You forgot to type a number!')
    process.exit(1)
}

// This line of code takes <any_number> and saves it to a variable.
// Use this variable in your code!
const anyNumber = Number(process.argv[2])
console.log('any_number: ', anyNumber)


/******************** 
Exercises
*********************/

// Log the string 'less than 3' if anyNumber is less than 3, otherwise log 'greater than or equal to 3'


// Log the string 'even' if anyNumber is even, otherwise log 'odd'


// Log 'ermagerd merth' if anyNumber is an odd multiple of 7, otherwise log 'wow, such math'


