import {storeMaker} from './core.js' 
import reducer from './reduce.js' 
const {attach, connect, dispatch} = storeMaker(reducer) 
window.dispatch = dispatch 
export {attach, connect, dispatch}
