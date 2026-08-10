class ListNode {
    url: string;
    prev: ListNode;
    next: ListNode;

    constructor(url: string){
        this.url = url;
        this.prev = null;
        this.next = null;
    }
}

class BrowserHistory {
    head: ListNode;
    curr: ListNode;
    /**
     * @constructor
     * @param {string} homepage
     */
    constructor(homepage) {
        this.head = new ListNode('@');
        this.curr = new ListNode(homepage);
        this.head.next = this.curr;
        this.curr.prev = this.head;
    }

    /**
     * @param {string} url
     * @return {void}
     */
    visit(url) {
        let node = new ListNode(url);
        this.curr.next = node;
        node.prev = this.curr;
        this.curr = node;
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    back(steps) {
        let i = 0
        while(i < steps && this.curr.url != '@'){
            this.curr = this.curr.prev;
            i++;
        }
        if(this.curr.url === '@'){
            this.curr = this.curr.next;
        }
        return this.curr.url;
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    forward(steps) {
        let i = 0
        while(i < steps && this.curr.next != null){
            this.curr = this.curr.next;
            i++;
        }
        return this.curr.url;
    }
}
