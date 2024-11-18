
// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

// Please solve it without the built-in Array.map method.

// Example 1:

// Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
// Output: [2,3,4]
// Explanation:
// const newArray = map(arr, plusone); // [2,3,4]
// The function increases each value in the array by one. 
// Example 2:

// Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
// Output: [1,3,5]
// Explanation: The function increases each value by the index it resides in.
// Example 3:

/*let arr = [1, 2, 3, 4, 5]

let arraySorting = function(arr,fn){
   let newArray = []
   for(i=0; i<arr.length; i++){
      newArray[i]=fn(arr[i],i)
   }
   return newArray
}

let fn=function(arr,i){
   return arr + i
}

let finalArray = arraySorting(arr,fn)

console.log(finalArray)*/


let firstArray = [2, 3, 4, 5,5];
let secondArray = [35, 6, 7, 9];

let sortedArray = firstArray.concat(secondArray).sort((a,b) => a-b);

// let linerSearch = function (n) {
//     let sortArry=[]
//    for (i = 0; i < sortedArray.length; i++){
//       if (n[i] == 35) {
//           sortArry.push(n[i])
//        }
//    }
//    return sortArry;
// }

let binarySearch = function (arr,value) {
   let startIndex = 0;
   let endIndex = arr.length - 1;
   while (startIndex <= endIndex) {
      let midIndex=Math.floor((startIndex+endIndex)/2)
      if (arr[midIndex] === value) {
         return midIndex
      } else if (arr[midIndex] > value) {
         endIndex = midIndex - 1;
      } else {
         startIndex = midIndex + 1
      }
   }
   return -1
}
// console.log(sortedArray.sort())
let serachIndex = binarySearch(sortedArray, 7)

// console.log(serachIndex)