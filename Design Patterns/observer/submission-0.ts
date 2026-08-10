class Observer {
    /**
     * @param {string} itemName
     */
    notify(itemName: string): void {
        throw new Error("Method 'notify()' must be implemented.");
    }
}

class Customer extends Observer {
    name: string;
    notifications: number;
    /**
     * @param {string} name
     */
    constructor(name: string) {
        super();
        this.name = name;
        this.notifications = 0;
    }

    /**
     * @param {string} itemName
     */
    notify(itemName: string): void {
        this.notifications += 1;
    }

    /**
     * @return {number}
     */
    countNotifications(): number {
        return this.notifications;
    }
}

class OnlineStoreItem {
    itemName: string;
    stock: number;
    subscribers: Set<Observer>;
    /**
     * @param {string} itemName
     * @param {number} stock
     */
    constructor(itemName: string, stock: number) {
        this.itemName = itemName;
        this.stock = stock;
        this.subscribers = new Set<Observer>();
    }

    /**
     * @param {Observer} observer
     */
    subscribe(observer: Observer): number {
        this.subscribers.add(observer);
        return this.subscribers.size;
    }

    /**
     * @param {Observer} observer
     */
    unsubscribe(observer: Observer): void {
        this.subscribers.delete(observer);
    }

    /**
     * @param {number} newStock
     */
    updateStock(newStock: number): void {
        if(this.stock === 0 && newStock > 0){
            for(let ob of this.subscribers){
                ob.notify(this.itemName);
            }
        }
        this.stock = newStock;
    }
}
