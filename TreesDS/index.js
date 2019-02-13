/**
 * --Directions
 *  1) Create a node class. The constructor should accept an argument that gets assigned
 *   to the data property and initialize the empty array for storing children. the node class
 *   should have methods add and remove
 *   2) Create a tree class. The tree constructor should initialize a 'root' property to null.
 *   3) Implement the traverse BFS and DFS on the tree class. Each method should accept a function
 *    that gets called with each element in the tree.
 * */

class Node{
    constructor(data){
        this.data= data;
        this.children = [];
    }

    add(data){
        this.children.push(new Node(data));
    }

    remove(){
       this.children = this.children.filter(node => {
            return node.data !== data;
        })
    }
}

class Tree{
    constructor(){
        this.root = null;
    }

    traverseBF(fn){
        const arr = [this.root];
        while(arr.length){
            //shift method take out the first element of the array
            const node = arr.shift();

            arr.push(...node.children);
            fn(node);
        }
    }

    traverseDF(fn){
        const arr = [this.root];
        while(arr.length){
            //shift method take out the first element of the array
            const node = arr.shift();
            //unshift method add the element at first index of the array
            arr.unshift(...node.children);
            fn(node);
        }
    }
}



//-------------------------------------------------
/**
 * --Direction
 * Given the root node of a tree, return an array where each element
 * is the width of the tree at each level
 * ---Example
 * Given:   0
 *       /  |  \
 *       1  2   3
 *       |      |
 *       4      5
 * */


function levelWidth(node) {
    const arr = [node,'s'];
    const counter = [0];
    while(arr.length>1){
        const rootnode = arr.shift();
        if(rootnode === 's'){
            counter.push(0);
            arr.push('s');
        }else{
            arr.push(...rootnode.children);
            counter[counter.length -1]++;
        }
    }
    return counter;
}