import htmlMaker from "../core.js";
function buttonItem(char) 
{
    return htmlMaker`
         <li class="keyboard__item" id = "button${char}"><button>${char}</button></li>
    `
}
export default buttonItem 