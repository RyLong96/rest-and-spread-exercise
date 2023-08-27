//Given this function:

// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num){
//         return num % 2 === 0;
//     });
// }

const filterOutOdds = (...nums) => nums.filter(v => v % 2 ===0);

//Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.

const findMin = (...nums) => Math.min(...nums);

findMin(1,2,3,4,5,6);

//Write a function called mergeObjects that accepts two objects and returns a new oject which contains all the keys and values of the first object and second object.


const obj1 = {
    a : 1,
    b : 2
}
const obj2 = {
    c : 3,
    d : 4
}
const mergeObjects = {...obj1, ...obj2};

//Write a function called doubleAndReturnArgs which acepts which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.

const doubleAndReturnArgs = (arr, ...nums) => [...arr, ...nums.map(num => num * 2) ]

//For this section, write the following functions using rest, spread and refactor these functions to be arrow functions!
//Make sure that you are always returning a new array or object and not modifying the existing inputs.


//remove a random element in the items array and return a new array without that item.

const removeRandom = arr => { 
    let random = Math.floor(Math.random() * arr.length);
    console.log(random)
    return [...arr.slice(0, random, ...arr.slice(random + 1))];
}

//return a new array with all the key and values from obj and a new key/value pair

const addKeyVal = (obj,key,val) => {
    let newObj = {...obj,key, val};
    return newObj;
}

console.log({name : 'Ryan', Last : 'Long'}, 'age', 27);

//return a new object with a key removed.

const removeKey = (obj, key) => {
    let newObj = {...obj}
    delete newObj[key]
    return newObj;
}

//Combine two objects and return a new object
const combine = (obj1, obj2) => {
    return {...obj1, ...obj2}
}

//return a new object with a modified key and value

const update = (obj, key, val) => {
    let newObj = {...obj}
    newObj[key] = val;
    return newObj;
}

