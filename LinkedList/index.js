/**
 * -- Directions
 * Implement classes Nod and LinkedLists
 * See the 'direction document'
 * */

class Node{
    constructor(data,next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {

    constructor(){
        this.head = null;
    }

    insertFirst(data){
        this.head = new Node(data,this.head);
        //----or -----
        //this.insertAt(data,0);
    }

    size(){
        let counter = 0;
        let node = this.head;

        while(node){
            counter++;
            node= node.next;
        }
        return counter;
    }

    getFirst(){
        return this.head;
        //---or----
        //return this.getAt(0);
    }

    getLast(){
        if(!this.head){
            return null;
        }
        let node = this.head;
        while (node){
            if(!node.next){
                return node;
            }
            node = node.next;
        }

        //---or----
        //this.getAt(this.size()-1);
    }

    clearList(){
        this.head = null;
    }

    removeFirst(){
        if(!this.head){
            return;
        }

        this.head = this.head.next;
    }

    removeLastNode(){
        if(!this.head){
            return;
        }
        if(!this.head.next){
            this.head = null;
            return;
        }
        let previous = this.head;
        let node = node.next;
        while (node){
            previous = node;
            node = node.next;
        }
        previous = null;

    }

    insertLastNode(data){
        const last = this.getLast();
        if(last){
            last.next = new Node(data);
        }else{
            this.head = new Node(data);
        }
    }

    getAt(index){
        if(!this.head){
            return;
        }
        let counter = 0;
        let node = this.head;
        while(node){
            if(counter === index){
                return node;
            }
            counter++;
            node = node.next;
        }
        return null;
    }

    removeAt(index){
        if(!this.head){
            return;
        }

        if(index === 0){
            this.head = this.head.next;
            return;
        }

        const previous = this.getAt(index-1);
        if(!previous || !previous.next){
            return;
        }
        previous.next = previous.next.next;
    }

    insertAt(data,index){
        if(!this.head){
            this.head = new Node(data);
            return;
        }
        if(index === 0){
            this.head = new Node(data,this.head);
            return;
        }
        const previous = this.getAt(index-1) || this.getLast();
        const node = new Node(data,previous.next);
        previous.next = node;

    }


    forEach(fn){
        let node = this.head;
        let counter = 0;
        while(node){
            fn(node, counter);
            node = node.next;
            counter++;
        }
    }

    *[Symbol.iterator](){
        let node = this.node;
        while(node){
            yield node;
            node = node.next;
        }
    }
}

const list = new LinkedList();
list.head = new Node(10);


/**
 * --Directions
 * Return the 'middle' node of the linkedlist . If the list has even number of elements,
 * return the node at the end of the first half of the list. *Do NOt* use a counter variable
 * *Do NOt* retrieve th size of the list, and oly iterate through the list one time.
 * */

function midPoint(list) {

    let slow = list.getFirst();
    let fast = list.getFirst();

    while (fast.next && fast.next.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}