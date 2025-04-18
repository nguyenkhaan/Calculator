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

const mp = new Map(); 
function makeMap() 
{
    mp.set('+', 1); 
    mp.set('-', 1); 
    mp.set('*', 2); 
    mp.set('/', 2); 
    mp.set('0', 0); 
} 
const isDigit = ch => (ch >= '0' && ch <= '9') 
const get = (s, i) => {
    let s1 = ''; 
    while (i < s.length && isDigit(s[i])) {
        s1 += s[i]; 
        ++i; 
    }
    return [s1, i]
}
function makeStack(s, number, ope) 
{
    ope.pushBack('0') 
    let i = 0; 
    while (i < s.length) 
    {
        if (s[i] >= '0' && s[i] <= '9') {
            let temp = ''; 
            [temp, i] = get(s, i); 
            number.pushBack(temp); 
            continue; 
        }
        else if (s[i] == '(') ope.pushBack(s[i]); 
        else if (s[i] == ')') {
            while (ope.back() != '(') number.pushBack(ope.popBack()) 
            ope.popBack(); 
        }
        else 
        {
            while (mp.get(ope.back()) >= mp.get(s[i])) number.pushBack(ope.popBack()); 
            ope.pushBack(s[i]); 
        }
        ++i; 
    }
    while (!ope.isEmpty()) number.pushBack(ope.popBack()); 
    return number; 
}
function calculate(number) 
{
    const st = new Stack() 
    while (!number.isEmpty()) 
    {
        let token = number.popFront(); 
        if (token[0] >= '0' && token[0] <= '9') st.push(Number(token)); 
        else 
        {
            let m1 = st.pop(); 
            let m2 = st.pop(); 
            console.log(m1, m2); 
            let res = 0; 
            switch (token) 
            {
                case '+': res = m1 + m2; break; 
                case '-': res = m2 - m1; break; 
                case '*': res = m1 * m2; break; 
                case '/': res = m2 / m1; break; 
            }
            st.push(Number(res)); 
        }
    }
    return st.top(); 
}
const readLine = require('prompt-sync')(); 
function solve() 
{
    makeMap(); 
    const s = readLine(); 
    let number = new deQueue(); 
    let ope = new deQueue(); 
    number = makeStack(s, number, ope); 
    number.popBack(); //Bo so 0 thua di 
    console.log(calculate(number)); 
}
solve(); 