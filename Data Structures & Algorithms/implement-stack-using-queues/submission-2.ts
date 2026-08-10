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
    // impliment this using a rotating queue
    q: MyQueue;
    constructor() {
        this.q = new MyQueue();
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x: number): void {
        this.q.enqueue(x);
    }

    /**
     * @return {number}
     */
    pop(): number {
        let len = this.q.length();
        for(let i = 0; i < len-1; i++){
            let val = this.q.dequeue();
            this.q.enqueue(val);
        }
        return this.q.dequeue();
    }

    /**
     * @return {number}
     */
    top(): number {
        let len = this.q.length();
        for(let i = 0; i < len-1; i++){
            let val = this.q.dequeue();
            this.q.enqueue(val);
        }
        let ans = this.q.dequeue();
        this.q.enqueue(ans);
        return ans;
    }

    /**
     * @return {boolean}
     */
    empty(): boolean {
        return this.q.length() === 0;
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
