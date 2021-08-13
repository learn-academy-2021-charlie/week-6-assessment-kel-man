// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their names capitalized.

// a) Create a test with an expect statement using the variable provided.

var people = [
  { name: "ford prefect", occupation: "hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "radio employee" }
]

describe('stringFormatter', () => {
  it('capitalizes the names and interpolates properly', () => {
    expect(stringFormatter(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is a president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is a president of the galaxy.", "Arthur Dent is a radio employee."]

/*
 * Loop through the array with .map(), using an anonymous function with arguments of destructured key value pairs, i.e. array.map(({name, occupation}) => {return sentence})
 * return the output of that map
 * inside map capitalize each word in name with name.split(' ') and a loop
 * interpolate using both variables
*/

// b) Create the function that makes the test pass.

const stringFormatter = people => {
  return people.map(({name, occupation}) => {
    let capital = name.split(' ').map(str => str[0].toUpperCase() + str.substr(1)).join(' ') // adds the first letter capitalized to the substring of the word starting at the 2nd letter
    return `${capital} is a ${occupation}.`
  })
}

// Code Golf first try!

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

var hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
var hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

describe('modThree', () => {
  it('returns an array of only the remainders of number values divided by three', () => {
    expect(modThree(hodgepodge1)).toEqual([2, 0, -1, 0])
    expect(modThree(hodgepodge2)).toEqual([2, 1, -1])
  })
})

/*
 * I could filter the array for numbers first and then map out an output of the numbers % 3 but that involves using two loops, resulting in O(2N)
 * while this O notation is basically the same as O(N) it's still technically less efficient than just doing one loop
 * So I'll use a for loop and create a storage array outside the loop to push my values to
 * Check if each value has typeof 'number'
 * if it does, storage.push(number%3)
 * return the storage
*/

// b) Create the function that makes the test pass.

const modThree = data => {
  let output = []
  for(let i=0; i<data.length; i++){
    typeof data[i] === 'number' && output.push(data[i]%3)
  }
  return output
}


// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

describe('cubeSum', () => {
  it('cubes each number then sums the indices', () => {
    expect(cubeSum(cubeAndSum1)).toEqual(99)
    expect(cubeSum(cubeAndSum2)).toEqual(1125)
  })
})

/*
 * create an output variable of type number initialized at 0
 * forEach index in the array, add the value cubed to the output variable
 * return the output variable
*/

// b) Create the function that makes the test pass.

const cubeSum = nums => {
  let output = 0
  nums.forEach(num => output += num**3)
  return output
}
