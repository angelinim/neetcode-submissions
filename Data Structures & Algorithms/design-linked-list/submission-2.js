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
    head = null;
    tail = null;
    length;

    constructor() {
        this.length = 0;
    }

    /**
     * @param {number} index
     * @return {ListNode}
     */
    getPrev(index) {}

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        if(index >= this.length){
            return -1;
        } else if(index === this.length-1){
            return this.tail.val;
        }
        let i = 0;
        let curr = this.head;
        while(curr){
            if(i === index){
                return curr.val;
            }
            curr = curr.next;
            i++;
        }
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtHead(val) {
        let node = new ListNode(val);
        if(this.length == 0){
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.length++;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtTail(val) {
        let node = new ListNode(val);
        if(this.length == 0){
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
    }

    /**
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index, val) {
        if(index === this.length){
            this.addAtTail(val);
            return;
        } else if (index === 0){
            this.addAtHead(val);
            return;
        }
        else if(index > this.length){
            return;
        }
        let curr = this.head;
        for(let i = 0; i < index; i++){
            curr = curr.next;
        }
        let node = new ListNode(val);
        let prev = curr.prev;
        curr.prev = node;
        prev.next = node;
        node.next = curr;
        node.prev = prev;
        this.length++;
    }

    /**
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index) {
        if(index >= this.length || index < 0){
            return;
        } else if(index === 0){
            let temp = this.head;
            this.head = this.head.next;
            temp.next = null;
            this.length--;
            return;
        } else if (index === this.length -1){
            this.tail = this.tail.prev;
            this.tail.next = null;
            this.length--;
            return;
        }

        let curr = this.head;
        for(let i = 0; i < index; i++){
            curr = curr.next;
        }
        let prev = curr.prev;
        let next = curr.next;
        prev.next = next;
        next.prev = prev;
        this.length--;
    }
}




