const empArr = [
  {
    id: 1,
    firstName: "krupa",
    lastName: "shree",
    yrsInCint: 2.3,
  },
  {
    id: 2,
    firstName: "Abhi",
    lastName: "Kurana",
    yrsInCint: 2.7,
  },
  {
    id: 3,
    firstName: "Anita",
    lastName: "miller",
    yrsInCint: 3,
  },
];

empJson = JSON.stringify(empArr);
//console.log(empJson);

for (let i = 0; i < empArr.length; i++) {
  //console.log(empArr[i]); // this works as expected
  //console.log(`index ${i} - ${JSON.stringify(empArr[i])}`); //2[object Object] ??  when we concatinate we need to parse the value index
  // console.log('index ' + i +'->' + empArr[i].);//index 2[object Object] ??
}

for (let i of empArr) {
  //console.log('index ' + i +'->' + empArr[i]);
  //console.log(empArr[i]); // got undefined check the documentation
}

for (let j in empArr) {
  //console.log('index ' + j +'->' + empArr[j]);
  //console.log(empArr[j]);  // got values -- this is more used
}

empArr.forEach(function (emp) {
  //function(emp) is a call back method
  //console.log(emp.firstName);
  //console.log(emp);
});

empArr.forEach((emp, i) => {
  //console.log(emp , i);
  //console.log(empArr[i]);
});

let values = [];

values.push(5);
values.push(6);

console.log(values);
