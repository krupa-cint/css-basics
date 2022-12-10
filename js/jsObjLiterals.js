const emp = {
    firstName : 'krupa',
    lastName : 'shree',
    yrsInCint : 2,
    techStack : ['java8','springboot','microservices','fee','js'],
    address: {
        street: '1 elmdrive',
        city: 'toronto',
        state: 'ON',
        pincode: 'M5J 2P1'
    }
}

console.log(emp.techStack[1] +" ->" + emp.address.city);

const {firstName, lastName, address:{city}} = emp;

console.log(city)

//adding properties directly to emp object

emp.email = "krupa@gmail.com";
console.log(emp);