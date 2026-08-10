class TrieNode {
    children: Map<string, TrieNode>;
    word: boolean;

    constructor(){
        this.children = new Map<string, TrieNode>();
        this.word = false;
    }
}

class PrefixTree {
    root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word: string): void {
        let cur = this.root;

        for(let c of word){
            if(!cur.children.has(c)){
                cur.children.set(c, new TrieNode());
            }
            cur = cur.children.get(c);
        }
        cur.word = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word: string): boolean {
        let cur = this.root;

        for(let c of word){
            if(!cur.children.has(c)){
                return false;
            }
            cur = cur.children.get(c);
        }
        return cur.word;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix: string): boolean {
        let cur = this.root;

        for(let c of prefix){
            if(!cur.children.has(c)){
                return false;
            }
            cur = cur.children.get(c);
        }
        return true;
    }
}






