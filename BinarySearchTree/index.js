/**
 * --Directions
 * 1) Implement the Node Class to create a Binary search tree.
 * the constructor should initialise the value data, left and right
 * 2) Implement the insert method for the node class. Insert should accept an argument
 * data then create an insert a new node at the appropriate location in the tree.
 * */

class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }

    insert(data){
        if(data<this.data && this.left){
            this.left.insert(data);
        }else if(data<this.data){
            this.left = new Node(data);
        }else if(data>this.data && this.right){
            this.right.insert(data);
        }else if(data>this.data){
            this.right = new Node(data);
        }
    }

    contains(data){
        if(this.data === data){
            return this;
        }

        if(this.data < data && this.left){
          return  this.left.contains(data);
        }else if(this.data > data && this.right){
            return this.right.contains(data);
        }

        return null;
    }
}


//--------------------------------------------------

/**
 * --Directions
 * Given a node, validate the binary search tree, ensuring that every node's left
 * hand child is less than the parent node's value and that every node's right
 * hand child is greater than the parent.
 * 
 * */

function validateBST(node, min = null, max = null) {
    if(max !== null && node.data > max ){
        return false;
    }
    if( min !== null && node.data < min){
        return false;
    }
    if( node.left && !validateBST(node.left, min, node.data)){
        return false;
    }
    if( node.right && !validateBST(node.right, node.right, max)){
        return false;
    }
    return true;
}