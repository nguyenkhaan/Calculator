import {attach, connect, dispatch} from './Module/store.js' 
import App from './Module/Component/App.js' 
import solve from './Module/calculator.js';
attach(App, document.getElementById('root')); 
const input = document.querySelector('.app__input'); 
const values = [1, 2, 3, '+', 4, 5, 6 , '-', 7, 8, 9, '*', '(', ')', 0, '=']
const specialValues = ['AC', 'DEL', '.', 'ANS']
var noReset = true; 
const keys = values.map(x => x + ''); 
function reset() 
{
    if (noReset == false) input.value = ''; 
    noReset = true; 
} 
function render(element) 
{
    const screenString = (input.value === undefined)? '' : input.value + element.innerText; 
    input.value = screenString
}
function action(action = 'ENTER', ...args) 
{
    let expressionInput = input.value; 
    let ans = ''; 
    switch (action) 
    {
        case 'ENTER': ans = solve(expressionInput); console.log(ans);  break; 
        case 'DELETE': ans = expressionInput.substring(0, expressionInput.length - 1); break;
        case 'CLEAR': ans = ''; break; //Xoa toan bo man hinh 
    }
    input.value = ans; 
    noReset = false; 
}
function buttonSpecialEffect() 
{
    const clearButton = document.getElementById('buttonAC'); 
    const deleteButton = document.getElementById('buttonDEL'); 
    clearButton.addEventListener('click', function() {
        reset(); 
        action('CLEAR'); 
    }) 
    deleteButton.addEventListener('click', function() {
        reset(); 
        action('DELETE'); 
    })
}
function buttonEffect()   //gan effect cho tung cai button 
{
    for (let i of values) 
    {
        let id = 'button' + i  
        let buttonElement = document.getElementById(id); 
        buttonElement.addEventListener('click', function() { 
            if (noReset === false) reset(); 
            if (i !== '=') render(buttonElement) 
            else action('ENTER'); 
        })  
    }
    //ganEffect cho tung ki tu dac biet 
    buttonSpecialEffect(); 
}
function main() 
{
    buttonEffect() 
    document.addEventListener('keydown', function(e) {
        if (keys.includes(e.key) && (e.key !== '=')) {
            const element = document.getElementById(`button${e.key}`)
            render(element); 
        }
        else if (e.key === 'Enter' || e.key === '=') 
        {
            action('ENTER'); 
        }
        else if (e.key === 'Backspace') {
            action('DELETE'); 
        }
    })
}
main() 