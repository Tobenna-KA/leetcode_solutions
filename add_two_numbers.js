/**
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // console.log(new ListNode)
    let new_l1 = 0, new_l2 = 0, carry = 0, vals = [];
    let fnode = new LinkedList //create new linked list
    
    while(l1 || l2) { //loop throw two lists at the same time
        if(l1) { //if there are still nodes available
            new_l1 = l1.val
            l1 = l1.next //set next node
        } else new_l1 = 0

        if(l2) {
            new_l2 = l2.val
            l2 = l2.next
        } else new_l2 = 0
        
      	//get sum of current list vals
        let sum = new_l2 + new_l1 + carry;
      	//if sum > 9 then carry over the second value
        carry = (sum > 9)? sum.toString().split("")[0] * 1: 0;
        //create new node with modulo
        fnode.addNode(new ListNode(sum % 10))
    }
    if(carry > 0) {
        fnode.addNode(new ListNode(carry))
    }
    
    // console.log(fnode)
    return fnode[head]
};

 //guaratee head is always different
const head = Symbol("head");

class LinkedList {
    constructor() {
        this[head] = null
    }
    
    addNode(node) {
        if(this[head] == null) { //if head is null
            this[head] = node // set new node
        } else {
            let curr = this[head]
            while(curr.next !== null) {
                curr = curr.next
            }
            
            curr.next = node //set new node
        }
    }
}
