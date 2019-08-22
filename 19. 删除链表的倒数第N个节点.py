
"""
1、得使用哑节点位于头部，否则无法排除删除头节点的情况
2、使用快慢指针完成一次遍历，快指针先走n步，随后快慢指针同步走
"""
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None


def removeNthFromEnd(head: ListNode, n: int) -> ListNode:
    node = ListNode(0)
    node.next = head
    fast = node
    slow = node
    for i in range(0, n + 1):
            fast = fast.next
    while fast:
        fast = fast.next
        slow = slow.next
    slow.next = slow.next.next
    return node.next

if __name__ == '__main__':
    node1 = ListNode(1)
    # node2 = ListNode(2)
    # node3 = ListNode(3)
    # node4 = ListNode(4)
    # node5 = ListNode(5)
    # node1.next = node2
    # node2.next = node3
    # node3.next = node4
    # node4.next = node5
    head = removeNthFromEnd(node1, 1)
    while head:
        print(head.val)
        head = head.next