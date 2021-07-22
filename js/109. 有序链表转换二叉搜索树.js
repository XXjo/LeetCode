/*
 * @Description: 
 * @Version: 1.0
 * @Autor: XuXiaoling
 * @Date: 2021-07-22 17:24:27
 * @LastEditors: XuXiaoling
 * @LastEditTime: 2021-07-22 17:56:16
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
 
}
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
/**
 * @description: 
 * @param {ListNode} head
 * @return {TreeNode}
 * @author: XuXiaoling
 */
var sortedListToBST = function(head) {
    if(head === null) {
        return null;
    }
    else if(head.next === null) {
        return new TreeNode(head.val);
    }
    let slow = head;
    let fast = head.next.next;
    let root = null;
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    root = new TreeNode(slow.next.val);
    let rightHead = slow.next.next;
    slow.next = null;
    root.left = sortedListToBST(head);
    root.right = sortedListToBST(rightHead);
    return root;
};

let node5 = new ListNode(9, null);
let node4 = new ListNode(5, node5);
let node3 = new ListNode(0, node4);
let node2 = new ListNode(-3, node3);
let node1 = new ListNode(-10, node2);
let res = sortedListToBST(node1);
console.log(res)