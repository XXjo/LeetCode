/*
 * @Description:    快慢指针，slow每走一步，fast走两步；另外，slow和fast碰到的时候，
                    入环点利用ptr指针与slow相遇得到
                    时间复杂度O(n),空间复杂度O(1)
 * @Version: 1.0
 * @Autor: XuXiaoling
 * @Date: 2021-07-25 17:52:55
 * @LastEditors: XuXiaoling
 * @LastEditTime: 2021-07-25 18:47:56
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next) 
}

/**
 * @description: 
 * @param {ListNode} head
 * @return {ListNode}
 * @author: XuXiaoling
 */
var detectCycle = function(head) {
    if(head === null) {
        return null;
    }
    let slow = head;
    let fast = head;
    while(fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast) {
            let ptr = head;
            while(ptr != slow) {
                ptr = ptr.next;
                slow = slow.next;
            }
            return ptr;
        }
    }
    return null;
};