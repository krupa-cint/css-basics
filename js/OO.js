// Object Oriented in JS

function Student(fName, lName, sem, dateOfJoining) {
  this.fName = fName;
  this.lName = lName;
  this.sem = sem;
  //this.dateOfJoining = dateOfJoining;
  this.dateOfJoining = new Date(dateOfJoining);

  // this.getJoiningYear = function() { //methods
  //     return this.dateOfJoining.getFullYear();

  // }

  // this.getFullName = function() { //method
  //     return fName+lName;
  // }
}

// above function can be replaced using prototype methods this is ES5

Student.prototype.getJoiningYear = function () {
  return this.dateOfJoining.getFullYear();
};

Student.prototype.getFullName = function () {
  return `${this.fName} ${this.lName} `;
};
student1 = new Student("Amanda", "Braz", 2, "2-1-2022");
student2 = new Student("Dadalto", "Wil", 7, "3-4-2021");

// console.log(student1.getFullName());
// console.log(student2.getJoiningYear());
// console.log(student1);

// (function () {
//     let x = "Hello!!";  // I will invoke myself
//   })();


//in ES6 we have class similar to Java class has contructors, methods in it

class Stud {
    constructor(firstName, lastName, sem, dateOfJoin) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.sem = sem;
        this.dateOfJoin = new Date(dateOfJoin);
    }

    getJoiningYr() {
        return this.dateOfJoin.getFullYear();
    }

    getFullNm() {
        return `${this.firstName}  ${this.lastName} ${this.sem}` ; // new way of concatination
    }
}

student3 = new Stud("Pedro", "Marthins", 2, "2-1-2022");
student4 = new Stud("Gabi", "luzi", 7, "3-4-2021");

console.log(student3.getFullNm());
console.log(student4.getJoiningYr());
console.log(student3);