const x = 10;

if (x == 10) {
  console.log(`value of x is ${x} datatype` + typeof x); // == here it looks for value not datatype
}

if (x === "10") {
  // here I'm comparing int to String
  console.log(`value of x is ${x} datatype` + typeof x);
}

// &&, || .. etc
// ternary operation

const battery = 10;

const color = battery > 15 ? 'green' : 'red';

console.log(color)
