/*
 * @Description:    1、首先遍历链表，获取链表长度length
                    2、k % length，取余step，即倒数step个元素移到链表头部即可
                    时间复杂度O(n)，空间复杂度O(1)
 * @Version: 1.0
 * @Autor: XuXiaoling
 * @Date: 2021-07-22 16:42:45
 * @LastEditors: XuXiaoling
 * @LastEditTime: 2021-07-22 17:31:05
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next) 
}

/**
 * @description: 
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 * @author: XuXiaoling
 */
var rotateRight = function(head, k) {
    let length = 0;
    let slow = head;
    let fast = head;
    let pre = head;
    if(!head || !head.next) {
        return head;
    }
    while(pre !== null) {
        length += 1;
        pre = pre.next; 
    }
    let step = k % length;
    while(step > 0) {
        fast = fast.next;
        step -= 1;
    }
    while(fast.next !== null) {
        slow = slow.next;
        fast = fast.next;
    }
    fast.next = head;
    head = slow.next;
    slow.next = null;
    return head;
}


let node5 = new ListNode(5, null);
let node4 = new ListNode(4, node5);
let node3 = new ListNode(3, node4);
let node2 = new ListNode(2, node3);
let node1 = new ListNode(1, node2);
let res = rotateRight(node1, 2);
console.log(res);