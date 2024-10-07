// linkedlist
class Node{
    constructor(data,next=null){
        this.data=data
        this.next=next
    }
}
class Linkedlist{
    constructor(){
        this.head = []
        return 
    }
}
Linkedlist.prototype.insertAtBeginning = function(){
    let newNode = new Node()
    this.head = newNode
}
Linkedlist.prototype.insertAtEnd = function(){
    let newNode = new Node()
    if(!this.head){
        return this.head= newNode
    }
    return this.head
}
//usage example 
let linkedlist = new Linkedlist()
// linkedlist.insertAtBeginning(33)
// console.log(linkedlist)
