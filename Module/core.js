export default function htmlMaker([first, ...strings], ...values) 
{
    return values.reduce(
        (acc, curr) => acc.concat(curr, strings.shift()),
        [first]
    )
    .filter(x => (x !==true || x === 0)) 
    .join(''); 
}   
    //concat(arr1, arr2) se giup lam phang mang con do va noi vao mang o phia truoc (viec noi duoc tien hanh bang ham reduce)
export function storeMaker(reducer) 
{
    let state = reducer(); 
    const roots = new Map(); 
    function render() {
        for (const [root, component] of roots) {
            const output = component(); 
            root.innerHTML = output; //day tung cai HTML vao trong tung cai root 
            //Mot chuong trinh cua chung ta co the co nhieu cai root 

        }
    }
    return {
        attach(component, root) {
            roots.set(root, component); 
            render(); 
        },  
        connect(selector = state => state) 
        {
            return component => (props, ...args) => component(Object.assign({}, props, selector(state), ...args)); 
        }, 
        //Nen viet phan cap nhu the nay de co the tai su dung qu trinh connect-> qua trinh day du lieu vao component 
        //component: mot ham callback dung de sinh ra cac phan tu html dua vao du lieu duoc turyen vao 
        //selector: mot ham tra ve du lieu duoc lua chon tu state 
        //Qua trinh lam viec 
        /**
         * B1: viet mot ham de khoi tao component (VD myComponent) (day la 1 cach pho bien trong react) 
         * B2: Lien ket no voi kho du lieu state, truyen du lieu tu state vao component 
         */
        dispatch(action, ...args) {
            state = reducer(state, action, args);   //reducer -> Nhan gia tri state truoc do, action them vao, cac tham so bo sung tu args 
            render(); 
        }
    }
}
