class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

def hasCycle(head):
    if head is None or head.next is None:
        return False
    slow = head
    fast = head.next
    while slow != fast:
        if fast == None or fast.next == None :
            return False
        fast = fast.next.next
        slow = slow.next
    return True