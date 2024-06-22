// generator function 

function* generatorFunction() {
    yield value;
  }
  

  // example 01 
  function* count() {
    let i = 0;
    while (true) {
      yield i++;
    }
  }
  const counter = count();
  console.log(counter.next().value); // 0
  console.log(counter.next().value); // 1
  