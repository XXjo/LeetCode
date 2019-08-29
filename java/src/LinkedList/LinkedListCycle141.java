package LinkedList;

public class LinkedListCycle141 {
    public static boolean hasCycle(ListNode head){
        if(head == null || head.next == null){
            return false;
        }
        ListNode slow = head;
        ListNode fast = head.next;
        while(fast != null && fast.next != null){
            if(slow == fast){
                return true;
            }
            else{
                slow = slow.next;
                fast = fast.next.next;
            }
        }
        return false;
    }


    public static void main(String[] args){
        ListNode a1 = new ListNode(1);
        ListNode a2 = new ListNode(2);
        a1.next = a2;
        System.out.println(a2.next);
        System.out.print(hasCycle(a1));
    }
}
