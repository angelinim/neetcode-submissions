class TrieNode {
    children: Map<string, TrieNode>;
    word: boolean;
    constructor(){
        this.word = false;
        this.children = new Map<string, TrieNode>();
    }
}

class WordDictionary {
    root: TrieNode;
    constructor() {
        this.root = new TrieNode;
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word: string): void {
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
        let i = 0;
        let queue: TrieNode[] = [this.root];
        let cur: TrieNode;
        
        while(queue.length > 0 && i < word.length){
            const len = queue.length;
            for(let j = 0; j < len; j++){
                cur = queue.shift();
                
                if(word[i] === '.'){
                    for(let [_, child] of cur.children){
                        queue.push(child);
                    }
                } else if(cur.children.has(word[i])){
                    queue.push(cur.children.get(word[i]));
                }
            }
            i++;
        }
        
        if(i == word.length){
            for(let leftover of queue){
                if(leftover.word){
                    return true;
                }
            }
        }
        return false;
    }
}













