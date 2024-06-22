// higher order function

function higherOrderFunction(callback) {
    callback();
  }
  higherOrderFunction(function() {
    console.log("Callback function executed.");
  });
  