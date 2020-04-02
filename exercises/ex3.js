
let animals = ['🐑', '🐕', '🐎', '🐈', '🐁'];


/********************
Exercises
*********************/

// Use this for loop to log all of the animals one by one
for (let i = 0; i < animals.length; i++) {
   // your code here
}

// Use this for loop to populate animalsReversed in reverse order to the animals array
let animalsReversed = [];
for (let i = 0; i < animals.length; i++) {
    // your code here
}
console.log(animalsReversed.join(', ')); // This line logs the whole array in one fell swoop



// Create a variable called 'animalsString', instantiate it as the emptystring ''.
// Write a for-loop that concatenates each animal to 'animalsString'.
// After the for-loop, log 'animalsString'. If your for-loop was implemented correctly, it should log:
//           '🐑🐕🐎🐈🐁'