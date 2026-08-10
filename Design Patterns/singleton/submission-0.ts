class Singleton {
    value: string = null;
    static instance: Singleton
    /**
     * In JavaScript consider this method as the 'getInstance'
     */
    constructor() {
        if(Singleton.instance != null){
            return Singleton.instance;
        }
        Singleton.instance = this
    }

    /**
     * @return {string}
     */
    getValue(): string {
        return this.value;
    }

    /**
     * @param {string} value
     * @return {void}
     */
    setValue(value: string): void {
        this.value = value;
    }
}
