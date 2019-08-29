package LinkedList;

public class PalindromeLinkedList234 {
    public static boolean isPalindrome(ListNode head) {
        if (head == null || head.next == null){
            return true;
        }
        ListNode slow = head;
        ListNode fast = head.next;
        while (fast != null && fast.next != null){
            fast = fast.next.next;
            slow = slow.next;
        }
        ListNode pre = null;
        ListNode cur = head;
        while (cur != slow.next){
            cur.next = pre;
            pre = cur;
            cur = cur.next;
        }
        //奇数个点
        if(fast.next != null){
            slow = slow.next.next;
        }
        while (pre != null){
            if(pre.val != slow.val){
                return false;
            }
            pre = pre.next;
            slow = slow.next;
        }
        return true;
    }

    public static void main(String[] args) {
        ListNode node1 = new ListNode(1);
        ListNode node2 = new ListNode(2);
        node1.next = node2;
        boolean res = isPalindrome(node1);
        System.out.print(res);
    }
}
