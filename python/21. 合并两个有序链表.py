class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None


def mergeTwoLists( l1: ListNode, l2: ListNode) -> ListNode:
    x1 = l1
    x2 = l2
    head = ListNode(0)
    res = head
    while x1 and x2:
        if x1.val < x2.val:
            res.next = x1
            x1 = x1.next
        else:
            res.next = x2
            x2 = x2.next
        res = res.next
    while x1:
        res.next = x1
        x1 = x1.next
        res = res.next
    while x2:
        res.next = x2
        x2 = x2.next
        res = res.next
    return head.next


if __name__ == '__main__':
    node1 = ListNode(1)
    node2 = ListNode(2)
    node3 = ListNode(4)
    node1.next = node2
    node2.next = node3
    node4 = ListNode(1)
    node5 = ListNode(3)
    node6 = ListNode(4)
    node4.next = node5
    node5.next = node6
    head = mergeTwoLists(node1, node4)
    while head:
        print(head.val, end=" ")
        head = head.next