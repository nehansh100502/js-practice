//async function 

async function functionName(parameters) {
    // function body
  }
  

  // example 01 

  async function fetchData() {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
  }
  