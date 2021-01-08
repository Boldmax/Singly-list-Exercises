function Node(val){
    this.val = val;
    this.next = null;
}

function SinglyLinkedList(arr=[]){
    this.head = null;
    this.tail = null;
    this.length = 0;
    if(Array.isArray(arr) && arr.length > 0){
        for(let i = 0; i < arr.length; i++){
            this.push(arr[i])
        }
    }
}
SinglyLinkedList.prototype.push = function(val){
    let newNode = new Node(val);
    if(!this.head){
        this.head = newNode
        this.tail = this.head
    }
    else{
        this.tail.next = newNode;
        this.tail = newNode
    }
    this.length++
    return this;
}

singlyLinkedList.prototype.pop = function(){
    return this.remove(this.length - 1)
}

singlyLinkedList.prototype.remove = function () {
    if(index < 0 || index >= this.length){
        return undefined;
    }
    let tmp;
    if(index === 0) {
        tmp = this.head;
        this.head = this.head.next;
        this.length--;
        return tmp.val;
    }
    
}
/* function pushNewNode(val){
    if (this.length - 1){
        const newNode = new Node(val)
        this.head = newNode
        this.length++
    }
   
} */

/* class LinkedListNode {
    constructor(value, next) {
        this.value = value
        this.next = next
    }
} */