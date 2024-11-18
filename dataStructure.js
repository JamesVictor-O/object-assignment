let input= [0,1,0,3,15,0,0,45,0]

// function reArrange(input){
//   let newArray= input.sort();
//   let arrangeArrays=[]

//    for( let i=input.length-1; i >= 0; i--){
//       arrangeArrays.push(newArray[i]) 
//    }
//    return arrangeArrays;
// }
// console.log(reArrange(input))
// let newArray={};
// function answer(){
//     let newInput=input.sort((a,b)=>{
//         return b-a;
//     })

//     let first=newInput.slice(0,3).sort((a,b) => a-b);

//     let second=input.slice(4)

//     return first.concat(second)
 
// }
// let newArray=input.sort((a,b)=> b-a)






// 




// let newArray = new MyArray

// newArray.push("orange");
// newArray.push("mango");
// newArray.push("banana");
// newArray.shift()


// console.log(newArray)

// let objName = {
//    myName: {
//       firstName: "james",
//       secondName:"victor"
//    },
//    objAge:22
// }
// objName["myName"]["lastName"] = "ochula"
// objName["myGoals"] = []
// objName["myGoals"][0]="be a smart conteact developer"

// console.log(objName.hasProperty())

const recordCollection = {
   2548: {
     albumTitle: 'Slippery When Wet',
     artist: 'Bon Jovi',
     tracks: ['Let It Rock', 'You Give Love a Bad Name']
   },
   2468: {
     albumTitle: '1999',
     artist: 'Prince',
     tracks: ['1999', 'Little Red Corvette']
   },
   1245: {
     artist: 'Robert Palmer',
     tracks: []
   },
   5439: {
     albumTitle: 'ABBA Gold'
   }
 };
 
 // Only change code below this line
 function updateRecords(records, id, prop, value) {
   let is_true=records[id].hasOwnProperty("tracks")
   if(value==""){
    delete records[id][prop]
   }else if(prop !== "tracks" && value !== ""){
       records[id][prop]=value
   } else if (prop == "tracks" && value !== "" && !is_true) {
      
      records[id][prop] = [];
      // console.log(records[id][prop])
     records[id][prop].push(value)
   } else if (prop == "tracks" && value !== "" && is_true) {
      console.log("has array")
   //   records[id].prop.push(value)
   }
   return records;
 }
 
let records=updateRecords(recordCollection, 5439, 'tracks', 'ABBA');
// console.log(records)
 
// If prop is tracks and value isn't an empty string, but the album doesn't have a tracks property, create an empty array and add value to it.
// If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.

 let objName = {
      myName: {
         firstName: "james",
         secondName:"victor"
      },
      objAge:22
   }
   objName["myName"]["lastName"] = "ochula"
   objName["myGoals"] = []
objName.myGoals.push("becaome a smart contract developer")
   
// console.log(objName)
   
// let i = 5;
// while (i > 0) {
//    myArray.push(i)
//    i--
// }

function multiplyAll(arr) {
   let product = 1;
   for (let i = 0; i < arr.length; i++){
        console.log(arr[i])
        for(let j=0; j< arr[i].length;j++){
          product *= arr[i][j]
        }
     }

   return product;
 }
 
//  console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));

const myArray = [];
let i = 10;

// Only change code below this line
let counter = 1;

// function printHello() {
//    console.log("hello world")
//    console.log(counter)
//    counter++;
   
//    if (counter > 5) {
//       return
//    }
//    printHello()
// }
// printHello()
function calculateTotal() {
   let total =0
   for (i = 0; i < 6; i++){
      total += i
   }
   return total;
}
// console.log(calculateTotal())

function recusiveTotal(num, total=0) {
   total += num
   console.log(total)
}
let product=0
let arrayInteger=[2,4,5,6,7,8];
// let arrLength=arrayInteger.length-1
let n=0
function getProduct(arrayInteger,arrLength){
    if(n> arrayInteger.length-1) return;
     product += arrayInteger[n];
     n++;
     console.log(product)
     getProduct(arrayInteger,arrLength)
}

// getProduct(arrayInteger,arrLength)

function useForMethod(arr, n){
   let product=1
   for(i=0; i<n; i++){
      product *= arr[i]
   }
   return product;
}



function useRecursive(arr,n){
   if(n==0){
      return 1
   }else{
    return  useRecursive(arr,n-1)* arr[n-1]
   }
}
// function multiply(arr, n) {
//    if (n <= 0) {
//      return 1;
//    } else {
//      return multiply(arr, n - 1) * arr[n - 1];
//    }
//  }
//  console.log(useRecursive(arrayInteger,6));

const contacts = [
   {
     firstName: "Akira",
     lastName: "Laine",
     number: "0543236543",
     likes: ["Pizza", "Coding", "Brownie Points"],
   },
   {
     firstName: "Harry",
     lastName: "Potter",
     number: "0994372684",
     likes: ["Hogwarts", "Magic", "Hagrid"],
   },
   {
     firstName: "Sherlock",
     lastName: "Holmes",
     number: "0487345643",
     likes: ["Intriguing Cases", "Violin"],
   },
   {
     firstName: "Kristian",
     lastName: "Vos",
     number: "unknown",
     likes: ["JavaScript", "Gaming", "Foxes"],
   },
 ];

 function lookUpProfile(name, prop) {
   // let objFound;
   //  for(i=0;i< contacts.length; i++){
   //    if(contacts[i].firstName === name){
   //      objFound= contacts.indexOf(contacts[i])
   //    }
   //  }
   //  if(objFound){
   //    console.log("found")
   //  }
   let objFound=contacts.findIndex(arr => arr.firstName === name)
   if(objFound >= 0){
      if(contacts[objFound].hasOwnProperty(prop)){
         return contacts[objFound][prop]
      }else{
        return "string No such property"
      }
     
   }else{
      return "string No such contact"
   }
 } 
 
//  lookUpProfile("Akira", "lkes");

function randomNum(min,max){
     return Math.floor(Math.random() * (max - min +1)) + 2
}

// console.log(randomNum(4,8))

//  The function should check if name is an actual contact's firstName and the given property (prop) 
//  is a property of that contact.

// If both are true, then return the "value" of that property.

// If name does not correspond to any contacts then return the string No such contact.

// If prop does not correspond to any valid properties of a contact found to match name then return the 
// string No such property.



let myName = "victor";
let strArr = ["james", 'victor', 'ochula']

let numArr = 12345;

let nubToString = numArr.toString().split("").reverse().join("");
let reversedNum = parseInt(nubToString)
function reverseString(value) {
   
   let isPalindrom = value.split('').reverse().join("")
   
   let result= isPalindrom == value ? "is a palindrome" : "is not a palindrome"
   return result;
}

let greeting = "hello world";

function capitalizationFunction(sentence) {
   let newArray=[]
   let allSplit = sentence.split(" ")
   for (i = 0; i < allSplit.length; i++){
       newArray.push(allSplit[i].toUpperCase())
   }
   return newArray;
}
// console.log(capitalizationFunction(greeting)) 

function add(x) {
   return x+2
}

function multiply(x) {
   return x * 3;
}

function compose(f1,f2) {
   return function(x){
      return  f1(f2(x))
   }
}

// let composed = compose(multiply, add)

// console.log(composed(4))
const functionsArray = [
   function add1(x) {
     return x + 1;
   },
   function multiplyBy2(x) {
     return x * 2;
   },
   function subtract3(x) {
     return x - 3;
   },
   function divideBy4(x) {
     return x / 4;
   }
];
let inputOf = 10;

functionsArray.forEach((fn, index) => {
   let result = fn(inputOf)
   // fn4(fn3(fn2(fn1(x))))
   // console.log(fn[0])
})

// 


var compose = function(functions) {
    
   if(functions.length===0){
      return function(x){ return x }
   }

   return functions.reduceRight((prevFn,nextFn)=>{
     return function(x){
        return nextFn(prevFn(x))
     }
   })
};

function generateRandom(str) {
   return parseInt(str,2)
}

// console.log(generateRandom("1110"))

function checkEqual(a, b) {
   return a > b ? "Equal" : "Not Equal";
}

// console.log(checkEqual(1, -1))


let arryNumb = [5, 2, 3, 4, 5];
let arrLength = arryNumb.length;
let total = 0

function runCode(arr,num) {
   if (num > arr.length-1) return;

   total += arr[num]
   

   let updated = num+1;
   
   // console.log(total)
   runCode(arr,updated)
   
}
// runCode(arryNumb,0)





// let total=0
for (i = 0; i < arryNumb.length; i++){
   total += arryNumb[i]
}
let emptyArry=[]
function countDown(n) {
   if (n < 1) return [];
   emptyArry.push(n);
   let updated = n - 1;
   countDown(updated)
}
// countDown(3)


function createArr(n,arr=[]) {
   if (n < 1) return arr;
   arr.push(n)
   createArr(n - 1, arr)
   return arr;
}

// console.log(createArr(9))

function totalArr(arr) {
   let total=1;
   for (i = 0; i < arr.length; i++){
      total *= arr[i]
   }
   return total;
}

// console.log(totalCn)
let arr = [2, 3, 4, 5];
function recusiveTo(arr,n,total=0) {
   if (n < 0) return total;
    total += arr[n];
   return recusiveTo(arr, n - 1, total)
   
}
// console.log(recusiveTo(arr, 3-1))

const contactsList = [
   {
     firstName: "Akira",
     lastName: "Laine",
     number: "0543236543",
     likes: ["Pizza", "Coding", "Brownie Points"],
   },
   {
     firstName: "Harry",
     lastName: "Potter",
     number: "0994372684",
     likes: ["Hogwarts", "Magic", "Hagrid"],
   },
   {
     firstName: "Sherlock",
     lastName: "Holmes",
     number: "0487345643",
     likes: ["Intriguing Cases", "Violin"],
   },
   {
     firstName: "Kristian",
     lastName: "Vos",
     number: "unknown",
     likes: ["JavaScript", "Gaming", "Foxes"],
   },
 ];
 
 function lookUpProfile(name, prop) {
    for (i = 0; i < contactsList.length; i++){
       if (contactsList[i].firstName === name) {
          if (contactsList[i].hasOwnProperty(prop)) {
             return contactsList[i][prop]
          } else {
             return "No such property"
          }
       }
    }
    return "No such contact"
 }
 
// let ans = lookUpProfile("Akira", "likes");
let ans=lookUpProfile("Kristian", "lastName")
// console.log(ans)
function rendomNum() {
    return Math.floor(Math.random() * 10)
}
//  console.log(rendomNum())

function checkSign(num) {
   return  num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}

// console.log(checkSign(-1));

var numArray = [];
for (var m = 0; m < 3; m++){
   numArray.push(i)
}

console.log(m);
console.log(numArray)






