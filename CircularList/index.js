/**
 *
 * --Directions
 * Given a linkedList, return true if the list is circular, false if it is not.
 * */

function circular(list) {
    let slow = list.getFirst();
    let fast = list.getFirst();

    while(fast.next && fast.next.next){
        slow = slow.next;
        fast = fast.next;
        if(slow=== fast){
            return true;
        }
    }
    return false;
}