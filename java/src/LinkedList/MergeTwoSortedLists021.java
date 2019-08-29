package LinkedList;

public class MergeTwoSortedLists021 {
    public static ListNode mergeTwoLists1(ListNode l1, ListNode l2) {
        ListNode temp = new ListNode(-1);
        ListNode res = temp;
        while (l1 != null && l2 != null){
            if(l1.val <= l2.val) {
                temp.next = l1;
                l1 = l1.next;
            }else {
                temp.next = l2;
                l2 = l2.next;
            }
            temp = temp.next;
        }
        if(l1 == null) temp.next = l2;
        if(l2 == null) temp.next = l1;
        return res.next;
    }

    public static void main(String[] args){
        ListNode a1 = new ListNode(1);
        ListNode a2 = new ListNode(2);
        ListNode a3 = new ListNode(4);
        ListNode b1 = new ListNode(1);
        ListNode b2 = new ListNode(3);
        ListNode b3 = new ListNode(4);
        a1.next = a2;
        a2.next = a3;
        b1.next = b2;
        b2.next = b3;
        ListNode resnode=mergeTwoLists1(a1,b1);
        int[] res = new int[6];
        int i = 0;
        while (i < 6){
            res[i] = resnode.val;
            resnode = resnode.next;
            i++;
        }
        System.out.print(res);

    }
}
