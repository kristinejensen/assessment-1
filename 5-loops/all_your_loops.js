// 1 - Write a for loop that runs 5 times
// Each iteration will increase the value
// of checkz by 1
var checkz = 0;

for (var i = 0; checkz < 5; i++) {
  checkz++;
}

// 2 - Write a while loop that runs
// 3 times. Each iteration will decrease
// the value of checkz by -2

while (checkz > 0) {
  checkz = checkz - 2;
}

// 3 - Summarize in English what this code is doing.
// Use a multiline comment to do so.
//
var numbers = [1, 2, 3, 4, 5, 6, 7]; // This is assigning an array to the variable numbers.
var total = 0; // This is assigning the value 0 to the variable total.
for (var i = 0; i < numbers.length; i++) { // This is a for loop that will add the value of the index to the total variable
  total += numbers[i];                     // as long as the the loop counter is less than the array length.
}
console.log(total); // This console.log the final total variable value. 
