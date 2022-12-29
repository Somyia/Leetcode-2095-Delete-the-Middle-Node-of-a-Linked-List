/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function(head) {
    
    let slow=head;
    let fast=head;
    
    if(fast.next==null){
        head =null;
        return head;
    }
    if(fast.next.next==null){
        slow.next=null;
        return head;
    }
        
    
    while(fast && fast.next){
        slow=slow.next;
        fast = fast.next.next;
    }
    
    slow.val= slow.next.val;
    slow.next=slow.next.next;
    
    return head;
};
