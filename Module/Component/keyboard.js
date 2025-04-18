import htmlMaker from "../core.js";
import button from './button.js'
const values = [1, 2, 3, '+', 4, 5, 6 , '-', 7, 8, 9, '*', '(', ')', 0, '=']
const specialValues = ['AC', 'DEL', '.', 'ANS']
function makeKeyboard() 
{
    var s = values.reduce((acc, curr) => acc + button(curr), '') + specialValues.reduce((acc, curr) => acc + button(curr), '');  
    return s; 
}
function keyboard() 
{
    return htmlMaker`
    <ul class = "app__keyboard"> 
        ${makeKeyboard()}
    </ul> 
    `
}
export default keyboard 