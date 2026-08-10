class MyQueue {
    q: number[];

    constructor(){
        this.q = []
    }

    enqueue(val: number){
        this.q.push(val);
    }

    dequeue(){
        return this.q.shift();
    }

    peek(){
        return this.q[0];
    }

    length(){
        return this.q.length;
    }
}

class MyStack {
    q1: MyQueue;
    q2: MyQueue;

    constructor() {
        this.q1 = new MyQueue();
        this.q2 = new MyQueue();
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x: number): void {
        this.q1.enqueue(x);
    }

    /**
     * @return {number}
     */
    pop(): number {
        let len = this.q1.length();

        for(let i = 0; i<len-1;i++){
            this.q2.enqueue(this.q1.dequeue());
        }
        let ans = this.q1.dequeue();
        len = this.q2.length();

        for(let i = 0;i<len;i++){
            this.q1.enqueue(this.q2.dequeue());
        }

        return ans;
    }

    /**
     * @return {number}
     */
    top(): number {
        let len = this.q1.length();

        for(let i = 0; i<len-1;i++){
            this.q2.enqueue(this.q1.dequeue());
        }
        let ans = this.q1.peek();
        this.q2.enqueue(this.q1.dequeue());
        len = this.q2.length();

        for(let i = 0;i<len;i++){
            this.q1.enqueue(this.q2.dequeue());
        }

        return ans;
    }

    /**
     * @return {boolean}
     */
    empty(): boolean {
        return this.q1.length() === 0;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
