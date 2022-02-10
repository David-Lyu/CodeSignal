function solution(l1, l2) {
    let l1Curr = l1;
    let l2Curr = l2;
    let listNode = new ListNode();
    let newLink = listNode;

    //if we get sent nothing
    if(!l1) return l2;
    if(!l2) return l1;

    //initialize head
    if(l1.value > l2.value) {
        listNode.value = l2.value;
        l2Curr = l2.next;
    } else {
        listNode.value = l1.value;
        l1Curr = l1.next;
    }

    //loop through after head
    while(l1Curr || l2Curr) {
        //if both have value check the value;
        if(l1Curr && l2Curr) {
            if(l1Curr.value < l2Curr.value) {
                listNode.next = new ListNode(l1Curr.value);
                listNode = listNode.next;
                l1Curr = l1Curr.next;
                continue;
            } else {
                listNode.next = new ListNode(l2Curr.value);
                listNode = listNode.next;
                l2Curr = l2Curr.next;
                continue;
            }
        }
        if(!l1Curr) {
            listNode.next = l2Curr;
            break;
        }
        if(!l2Curr) {
            listNode.next = l1Curr;
            break;
        }
    }
    return newLink;
}
