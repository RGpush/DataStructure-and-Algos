/**
 * --Direction
 * Create a queue Data Structure. The queue should be a class
 * with methods 'add' and 'remove' .
 *
 * */

class Queue {
    // the only location where we can do initialisation of the variable is in the constructor
    constructor(){
        this.queue = [];
    }

    add (record) {
        this.queue.unshift(record);
    }

    remove(){
       return this.queue.pop();
    }

    peek(){
        return this.queue[this.queue.length -1];
    }
}


// ----------------------------------------------

//Implement weave function which receives two two queues as arguments and combines the content of each into a new, third queue.

function weave(q1, q2) {
    const q = new Queue();
    while (q1.peek() || q2.peek()){
        if(q1.peek()){
            q.add(q1.remove());
        }
        if(q2.peek()){
            q.add(q2.remove());
        }
    }
    return q;
}