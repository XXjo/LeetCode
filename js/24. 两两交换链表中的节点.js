/*
 * @Description: 建立虚拟前驱节点，能省去不少麻烦
                 时间复杂度O(n)，空间复杂度O(1)
 * @Version: 1.0
 * @Autor: XuXiaoling
 * @Date: 2021-07-15 17:32:47
 * @LastEditors: XuXiaoling
 * @LastEditTime: 2021-07-15 17:33:12
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}


var swapPairs = function(head) {
    let virtual = new ListNode(null, head);
    let pre = virtual;
    let cur = pre.next;
    while(cur && cur.next) {
        let curNext = cur.next;
        pre.next = curNext;
        cur.next = curNext.next;
        curNext.next = cur;

        pre = cur;
        cur = cur.next;
    }
    return virtual.next;
};