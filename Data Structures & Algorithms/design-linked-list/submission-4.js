class ListNode{
    val;
    next;
    prev;
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class MyLinkedList {
    constructor() {
        // use dummy values for head and tail
        this.head = new ListNode(0);
        this.tail = new ListNode(0);
        this.head.next = this.tail;
        this.tail.prev = this.head;
        this.length = 0;
    }

    /**
     * @param {number} index
     * @return {ListNode}
     */
    getPrev(index) {
        // use length of list to traverse from
        // the front or the back.
        if(index <= this.length/2){
            // traverse forwards
            let curr = this.head;
            while(index > 0){
                index--;
                curr = curr.next;
            }
            return curr;
        }else {
            let curr = this.tail;
            index = this.length-index;
            while(index >= 0){
                index--;
                curr = curr.prev;
            }
            return curr;
        }
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        if(index >= this.length){
            return -1;
        }
        return this.getPrev(index).next.val;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtHead(val) {
        let curr = this.head.next;
        let node = new ListNode(val);
        this.head.next = node;
        node.prev = this.head;
        node.next = curr;
        curr.prev = node;
        this.length++;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtTail(val) {
        let curr = this.tail.prev;
        let node = new ListNode(val);
        this.tail.prev = node;
        node.next = this.tail;
        node.prev = curr;
        curr.next = node;
        this.length++;
    }

    /**
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index, val) {
        if(index > this.length){
            return;
        }
        let prev = this.getPrev(index);
        let node = new ListNode(val);
        let next = prev.next;
        prev.next = node;
        next.prev = node;
        node.prev = prev;
        node.next = next;
        this.length++;
    }

    /**
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index) {
        if(index >= this.length){
            return
        }
        let prev = this.getPrev(index);
        let next = prev.next.next;
        prev.next = next;
        next.prev = prev;
        this.length--;
    }
}
