class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

def reverseList(head):
    """
    :type head: ListNode
    :rtype: ListNode
    """
    if head is None or head.next is None:
        return head
    current = head
    pre = None
    while current is not None:
        temp = current.next
        #temp.next = current
        current.next = pre
        pre = current
        current = temp
    return pre


if __name__ == '__main__':
    node1 = ListNode(1)
    node2 = ListNode(2)
    node3 = ListNode(3)
    node4 = ListNode(4)
    node5 = ListNode(5)
    node1.next = node2
    node2.next = node3
    node3.next = node4
    node4.next = node5
    res = reverseList(node1)
    while res is not None:
        print(res.val)
        res = res.next