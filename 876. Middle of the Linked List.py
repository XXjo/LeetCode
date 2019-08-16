class LinkNode:
    def __init__(self, x):
        self.val = x
        self.next = None

def middleNode(head):
        slow = head
        fast = head
        while fast and fast.next:
            fast = fast.next.next
            slow = slow.next
        return slow.val

if __name__ == '__main__':
    a1 = LinkNode(1)
    a2 = LinkNode(2)
    a3 = LinkNode(3)
    a4 = LinkNode(4)
    a5 = LinkNode(5)
    a6 = LinkNode(6)
    a1.next = a2
    a2.next = a3
    a3.next = a4
    a4.next = a5
    a5.next = a6
    val = middleNode(a1)
    print(val)
