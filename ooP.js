let student = {
   firstName: "James",
   lastName: "Ochula",
   studentAge: 23,
   
   sayName() {
      return  "my name is" + " " + this.firstName + " " + this.lastName
   }
}

console.log()

function Person(_name,_gender,_birthYear  ) {
   this.firstName = _name;
   this.gender = _gender;
   this.birthYear = _birthYear; 
   this.calAge = function () {
       return new Date().getFullYear()
   }
}