// syntax 
function ConstructorFunction(parameters) {
    this.property = value;
  }

  // example 01
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  const john = new Person('John', 30);
  console.log(john)