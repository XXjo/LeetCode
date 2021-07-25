/*
 * @Description:    双指针
                    时间复杂度O(n), 空间复杂度O(1)
 * @Version: 1.0
 * @Autor: XuXiaoling
 * @Date: 2021-07-25 15:51:01
 * @LastEditors: XuXiaoling
 * @LastEditTime: 2021-07-25 15:53:21
 */
function ListNode(val, next) {
    this.val = val;
    this.next = (next===undefined ? null : next) 
}


/**
 * @description: 
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 * @author: XuXiaoling
 */
var getIntersectionNode = function(headA, headB) {
    if(!headA ||  !headB) {
        return null;
    }
    let a = headA;
    let b = headB;
    while(a != b) {
        a = a === null ? headB : a.next;
        b = b === null ? headA : b.next;
    }
    return a;
};

let node3 = new ListNode(4);
let node2 = new ListNode(6, node3);
let node1 = new ListNode(2, node2);

let node22 = new ListNode(5);
let node21 = new ListNode(1, node22);
console.log(getIntersectionNode(node1, node21))