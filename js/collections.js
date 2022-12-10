let nums = [98, 42, 34, 65, 46, 67];

console.log(nums);

nums.forEach(function (i) {
  //console.log(i);
});

nums.forEach((num, i) => {
  console.log(num, i);
});

// function(i) , (num,i) both is call back functions

// console.log(nums.filter(num => num % 2 === 0)); // filter is like if condition which is of the type boolean

nums.filter((num) => num % 2 === 0).forEach((n) => console.log(n));

// extract only even numbers from the list and for those even number find the sq's of it

let total = nums
  .filter((n) => n % 2 === 0) //Arrow fn
  .map((n) => n * n) // it can be any variable
  .reduce((sum, n) => sum + n); // sum, n  can be any variable

console.log(`total = ${total}`);

nums.map((n) => n + 4).filter((n) => n > 2);

console.log(nums.sort());

console.log(nums.reverse());


let data = ['xyz', 'abc','pqr','aaa','lmn','xxx', 123 , 256.5 , 
zzz = {
    firstName : 'krupa',
    lastName : 'shree',
    yrsInCint : 2}];
console.log(data.sort());
console.log(data.reverse());

// set in JS

let setData = new Set(); // its a upper case Set

setData.add(3);
setData.add(3);
setData.add(2);
setData.add(4);


console.log(setData);
