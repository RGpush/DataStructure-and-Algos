/**
 * ---Direction
 * Create a stack data structure. The stack should be a class  with methods 'push','pop' and 'peek'.
 * Adding an element to the stack should store it until it is removed.
 * */

class Stack{
    constructor(){
        this.stack = [];
    }

    push(data){
        this.stack.push(data);
    }

    pop(){
        return this.stack.pop();
    }

    peek(){
        return this.stack[this.stack.length-1];
    }
}