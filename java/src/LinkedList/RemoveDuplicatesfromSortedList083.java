package LinkedList;

public class RemoveDuplicatesfromSortedList083 {
    public static ListNode  deleteDuplicates(ListNode head){
        if(head == null || head.next == null){
            return head;
        }
        ListNode pre = head;
        ListNode res = pre;
        ListNode cur = head.next;
        while (cur != null){
            if(pre.val == cur.val){
                cur = cur.next;
            }else {
                pre.next = cur;
                pre = pre.next;
                cur = cur.next;
            }
        }
        pre.next = null;
        return res;
    }

    public static void main(String[] args) {
        ListNode a1 = new ListNode(1);
        ListNode a2 = new ListNode(1);
        ListNode a3 = new ListNode(1);
        a1.next = a2;
        a2.next = a3;
        ListNode res = deleteDuplicates(a1);
        System.out.print(res.val);
    }
}
