/**
 * --Directions
 *  Implement a queue datastructure using two stacks.*DONot* create an array
 *  inside of the queue class. Queue should implement the methods 'add', 'remove',
 *  and 'peek'.
 *
 *  hint:
 *  STACK + STACK = QUEUE
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


class Queue {
    constructor(){
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }

    add(data){
        this.stack1.push(data);
    }


    remove(){
        while(this.stack1.peek()){
            this.stack2.push(this.stack1.pop());
        }
        const popData = this.stack2.pop();
        while (this.stack2.peek()){
            this.stack1.push(this.stack2.pop());
        }

        return popData;
    }

    peek(){

        while(this.stack1.peek()){
            this.stack2.push(this.stack1.pop());
        }
        const peekData = this.stack2.peek();
        while (this.stack2.peek()){
            this.stack1.push(this.stack2.pop());
        }

        return peekData;

    }
}