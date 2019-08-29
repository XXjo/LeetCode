package LinkedList;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;

public class IntersectionOfTwoLinkedLists160 {
    public static ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        HashMap<ListNode, Integer> dict = new HashMap<>();
        while (headA != null){
            dict.put(headA, headA.val);
            headA = headA.next;
        }
        while (headB != null){
            if (dict.get(headB) != null){
                return headB;
            }
            headB = headB.next;
        }
        return null;
    }
    public static void main(String[] args) {
//        ArrayList<String> b = new ArrayList<>();
//        b.add("a");
//        b.add("b");
//        b.add("c");
//        b.add("a");
//       HashSet<String> a = new HashSet<>(b);
//       System.out.print(a);
        ListNode headA = new ListNode(2);
        ListNode A1 = new ListNode(6);
        ListNode A2 = new ListNode(4);
        ListNode headB = new ListNode(1);
        ListNode B1 = new ListNode(5);
        headA.next = A1;
        A1.next = A2;
        headB.next = B1;
        ListNode res = getIntersectionNode(headA, headB);
        System.out.print(res);

    }
}
