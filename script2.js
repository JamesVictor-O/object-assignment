
// let scores = [20, 30, 10, 34, 23, 10, 50, 34, 32, 20, 30, 40]
// let array = [20, 30, 10, 34, 23, 10, 50, 34, 32, 20, 30, 40]

// function generateNumber(parameter) {
//    for (i = 1; i < 30; i++){
//       if (i%2) {
//          console.log(`buzz ${i}`)
//       } else {
//          console.log(`${i} fizz `)
//       }
//    }
// }
// generateNumber()


// function runingScores(array,fail) {
//    array.forEach((score,index)=> {
//       if (score <= fail) {
//         console.log(`${index} you failed with a mark of ${score}`) 
//       } else if (score > 10) {
//          console.log(`${index} you passed with a mark of ${score}`)
//       } else if (score > 30) {
//          console.log(`${index} good scores with a mark of ${score}`)
//       }
//    })
// }

// runingScores(scores,10)

// function generateNumber(scores) {
//    for (let i = 1; i < 200; i++){
//          console.log(i)
     
//    }
// }
// generateNumber()


// work 2

let numArray = [2, 4, 6, 8, 10]

function increamentArray(array) {
   let newArray=[]
   for (i = 0; i < array.length; i++){
      newArray.push(array[i]+20)
   }
   return newArray
}

console.log(increamentArray(numArray))

// have an array of names 
let arrayOfNames = ["morant", "durant", "lebron"]

function createUserName(names) {
   let user = [];
   for (i=0; i < names.length;i++){
      let userName = names[i].slice(0, 3)
       userName = `${userName}${i}`;
      user.push(userName)
   }
   return user;
}

// console.log(createUserName(arrayOfNames))

let person={
   name: "james",
  arrowFunction:()=> {
       console.log(this.names)
   },

   regularFunction :function () {
     console.log(this.name)
  }
}

person.arrowFunction()
person.regularFunction()