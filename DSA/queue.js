// queue
class Queue{
    constructor(){
        this.queue = []
    }
    enqueue(data){
        this.queue.push(data)
    }
    dequeue(){
        this.queue.shift()
    }
    peek(){
        return this.queue[0]
    }
    isempty(){
        if(this.queue.length===0){
            return `queue is empty`
        }
        return this.queue.length
    }
    reverse(){
        return this.queue.reverse()
    }
    containes(){
        return this.queue.includes()
    }
    clear(){
        this.queue = []
    }
    printQueue(){
        let str = ""
        for(let i=0 ; i<this.queue.length; i++){
            str += this.queue[i] +"\n"
        }
        return str
    }
}
// usa ge example 
let myQueue = new Queue()
myQueue.enqueue(22)
myQueue.enqueue(11)
myQueue.enqueue(22)
myQueue.enqueue(44)
myQueue.enqueue(33)
console.log(myQueue.peek())
console.log(myQueue.isempty())
console.log(myQueue.reverse())
console.log(myQueue.containes())
console.log(myQueue.printQueue())

// stack
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
        this.stack.peek[0]
    }
    reverse(){
        return this.stack.reverse()
    }
    contains(){
        return this.stack.includes()
    }
    isempty(){
        if(this.stack.length===0){
        return `stack is empty`
    }
    return this.stack.length
    }
    printStack(){
        let str = ``
        for(let i = 0; i<this.stack.length;i++){
            str += this.stack[i] + `\n`
        }
        return str
    }
}
//usage example

let mystack = new Stack()
mystack.push(22)
mystack.push(33)
mystack.push(44)
mystack.push(55)
console.log(mystack.printStack())
