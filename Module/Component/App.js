import htmlMaker from "../core.js";
import keyboard from "./keyboard.js";
import input from "./input.js";
function App() 
{
    return htmlMaker`
         <div class="app">
            ${input()}
            ${keyboard()}
         </div>
    `
}
export default App