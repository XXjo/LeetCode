class ListNode:
    def __init__(self, val):
        self.next = None
        self.val = val

"""
    两点：1、当前节点为noneType就不存在val属性，此时应该考虑取出节点值或赋值，或不动后进行取余或者是取整运算
          2、考虑[1]、[9]这种情况
"""
def Add(l1, l2):
    temp1 = ListNode(0)
    res = temp1
    quotient = 0
    while l1 or l2:
        x1 = 0 if l1 is None else l1.val
        x2 = 0 if l2 is None else l2.val
        remain = (x1 + x2 + quotient) % 10
        temp = ListNode(remain)
        quotient = (x1 + x2 + quotient) // 10
        if l1:
            l1 = l1.next
        if l2:
            l2 = l2.next
        temp1.next = temp
        temp1 = temp1.next
    if quotient > 0:
        temp1.next = ListNode(quotient)
    return res.next

if __name__ == '__main__':
    node1 = ListNode(5)
    #node2 = ListNode(8)
    #node3 = ListNode(3)
    node4 = ListNode(5)
    #node5 = ListNode(9)
    #Node6 = ListNode(4)
    #node1.next = node2
    #node2.next = node3
    #node4.next = node5
    #node5.next = Node6
    res = Add(node1, node4)
    while res:
        print(res.val)
        res = res.next