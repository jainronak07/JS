Function.prototype.mybind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new TypeError("Not a CALLABLE Function");
  }

  context.fn = this;
  return function(...newArgs) {
    return context.fn(...args, ...newArgs);
  };
};

const person = {
  name: "John",
  age: 30,
};
function greet(greeting) {
  console.log(
    `${greeting}, my name is ${this.name} and I am ${this.age} years old.`,
  );
}

const newFuns = greet.mybind(person, "Hello");
newFuns(); // Output: [Function: bound greet]
