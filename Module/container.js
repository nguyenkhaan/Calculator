class Stack 
{
    constructor() {
        this.item = [] 
    } 
    push(x) {
        this.item.push(x) 
    } 
    size() {
        return this.item.length 
    } 
    isEmpty() {
        return (this.item.length == 0)
    }
    top() {
        if (this.isEmpty()) return undefined; 
        return this.item[this.item.length - 1] 
    } 
    pop() {
        if (this.isEmpty()) return undefined; 
        return this.item.pop(); 
    }
} 
class Queue 
{
    constructor() {
        this.item = [] 
    } 
    push(x) {
        this.item.push(x) 
    } 
    size() {
        return this.item.length 
    } 
    isEmpty() {
        return (this.item.length == 0) 
    } 
    front() {
        if (this.isEmpty()) return undefined; 
        return this.item[0] 
    } 
    pop() {
        if (this.isEmpty()) return undefined; 
        return this.item.shift() 
    }
}
class deQueue 
{
    constructor() {
        this.item = [] 
    } 
    pushBack(x) {
        this.item.push(x) 
    }
    pushFront(x) {
        this.item.unshift(x) 
    }
    size() {
        return this.item.length 
    }
    isEmpty() {
        return (this.size() == 0) 
    }
    popBack() {
        if (this.isEmpty()) return undefined 
        return this.item.pop(); 
    }
    popFront() {
        if (this.isEmpty()) return undefined 
        return this.item.shift() 
    }
    front() {
        if (this.isEmpty()) return undefined 
        return this.item[0] 
    }
    back() {
        if (this.isEmpty()) return undefined 
        return this.item[this.item.length - 1] 
    }
}
class Heap {
    constructor(logic = false) {
        this.item = [];  // Mảng chứa các phần tử của heap
        this.logic = logic; // Nếu true, heap là min-heap, nếu false, heap là max-heap
    }
    size() {
        return this.item.length;
    }

    isEmpty() {
        return this.item.length === 0;
    }
    heapify(n, i) {
        let left = 2 * i + 1;
        let right = 2 * i + 2;
        let replace = i;
        if (left < n) {
            if (this.item[replace] < this.item[left] && !this.logic) replace = left; 
            else if (this.item[replace] > this.item[left] && this.logic) replace = left;
        }
        if (right < n) {
            if (this.item[replace] < this.item[right] && !this.logic) replace = right;
            else if (this.item[replace] > this.item[right] && this.logic) replace = right;
        }
        if (replace !== i) {
            const temp = this.item[i];
            this.item[i] = this.item[replace];
            this.item[replace] = temp;
            this.heapify(n, replace);
        }
    }
    balance() {
        const n = this.size();
        for (let i = Math.trunc(n / 2) - 1; i >= 0; --i) {
            this.heapify(n, i);
        }
    }
    push(x) {
        this.item.push(x); 
        this.balance(); 
    }
    top() {
        if (this.isEmpty()) return undefined;
        return this.item[0];
    }
    pop() {
        if (this.isEmpty()) return undefined;
        const root = this.item[0];
        this.item[0] = this.item[this.size() - 1]; 
        this.item.pop(); 
        this.balance(); 
        return root;
    }
}
export {Stack, Queue, deQueue, Heap}