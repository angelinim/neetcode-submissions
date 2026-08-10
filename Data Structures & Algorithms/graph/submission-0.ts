class Graph {
    map: Map<number, number[]>
    constructor() {
        this.map = new Map();
    }

    /**
     * @param {number} src
     * @param {number} dst
     * @return {void}
     */
    addEdge(src: number, dst: number): void {
        if(this.map.has(src)){
            let temp = this.map.get(src);
            temp.push(dst);
            this.map.set(src,temp);
        } else {
            this.map.set(src,[dst]);
        }

        if(!this.map.has(dst)){
            this.map.set(dst,[]);
        }
    }

    /**
     * @param {number} src
     * @param {number} dst
     * @return {boolean}
     */
    removeEdge(src: number, dst: number): boolean {
        if(!this.map.has(src)){
            return false;
        }
        let source = this.map.get(src);
        let pos;
        for(let i = 0; i < source.length; i++){
            if(source[i] === dst){
                pos = i;
                break;
            }
        }
        if(pos == null){
            return false;
        }
        source.splice(pos,1);
        this.map.set(src,source);
        return true;
    }

    /**
     * @param {number} src
     * @param {number} dst
     * @return {boolean}
     */
    hasPath(src: number, dst: number): boolean {
        let visited = new Set();
        let stk = [src];

        while(stk.length>0){
            let cur = stk.pop();
            if(cur === dst){
                return true;
            }
            let values = this.map.get(cur);
            if(!values || visited.has(cur)){
                continue;
            }

            for(let v of values){
                if(!visited.has(v)){
                    stk.push(v);
                }
            }
            visited.add(cur);
        }

        return false;
    }
}












