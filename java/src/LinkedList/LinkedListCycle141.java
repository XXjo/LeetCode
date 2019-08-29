package LinkedList;

public class LinkedListCycle141 {
    public static boolean hasCycle(ListNode head){
        if(head == null || head.next == null){
            return false;
        }
        ListNode fast = head.next;
        ListNode slow = head;
        while (fast != slow){
            if (fast == null || fast.next == null){
                return false;
            }
            fast = fast.next.next;
            slow = slow.next;
        }
        return true;
    }


    public static void main(String[] args){
        ListNode a1 = new ListNode(1);
        ListNode a2 = new ListNode(2);
        a1.next = a2;
        System.out.print(hasCycle(a1));
    }
}
