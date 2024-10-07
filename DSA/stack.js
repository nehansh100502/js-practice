 
// Stack 

class Stack{
    constructor(){
      this.stack = []
    }
    push(data){
      this.stack.push(data)
    }
    pop(){
      this.stack.pop()
    }
    peek(){
      return this.stack[this.stack.length-1]
    }
    reverse(){
      return this.stack.reverse()
    }
    contains(){
      return this.stack.includes()
    }
    isempty(){
      if(this.stack.length === 0){
      return ;
    }
    return this.stack.length
  }
  clear(){
    this.stack = []
  }
  printStack(){
    let str = ""
    for(let i=0; i<this.stack.length; i++){
      str += this.stack[i] + "\n"
    }
    return str
  }
  }
  //Usage example

  let myStack = new Stack()
  myStack.push(20)
  myStack.push(30)
  myStack.push(40)
  myStack.push(33)
  console.log(myStack)
console.log(myStack.peek())
console.log(myStack.reverse())
console.log(myStack.contains())
console.log(myStack.isempty())
console.log(myStack.printStack())