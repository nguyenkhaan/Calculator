import {Stack, Queue, deQueue, Heap} from './container.js'
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
function solve(s) 
{
    makeMap(); 
    let number = new deQueue(); 
    let ope = new deQueue(); 
    number = makeStack(s, number, ope); 
    number.popBack(); //Bo so 0 thua di 
    return calculate(number) 
}
export default solve