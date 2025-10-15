// // call back funtion

// const { useCallback } = require("react");

// let arr = [1, 2 , 3, 4, 5];

// arr.forEach(function  multi(multiplication) {
// // console.log(multiplication*multiplication);

// })

// //************************* map ******************************** */
// let add = [ 2, 3, 4, 5, 6, 9];

//  let multi = add.map((val)=> {

//     return val

// })
// // console.log(multi)


// // arr.filter ye bhi ha jo arr mise no ko filter kerta h like even ha ya odd//
// // arr.reduce //


// function sum( a, b){
//     // return a+b ;
//     // console.log(a+b)
// }
//  sum(2 , 3)
// //  console.log(total


// let arr3 = [1, 2, 3];


//  let allNum = arr3.map(( val) => {

// })
// // console.log(allNum)


// // ********************** DOM ******************************************

// // document.getElementById
// // document.getElementsByClassName
// // document.getElementsByTagName
// // document.querySelector
// //  let h1 =document.querySelector("h1")
// //  console.dir(h1) 
// //  console.dir(frist)
// // document.querySelectorAll
 
// // let id = h1.getAttribute("id")
// // console.log(id)
// // console.dir(window.document)
// // console.log("hello world!")
// // console.log(document.body);
// // console.dir(document.body);

// // let h1 = document.querySelector("h1")
// // console.log(h1)

// // ************************* events ****************************************
// // onClick,ondblclick,onmouseover,(this is the frist type to use event ) note ham ise js mai bhi use ker sakte ha and html mai bhi inline css ki tarah bhi 
// //but the good way to use in js these funciton

// // let btn = document.querySelector('#btn');

// // btn.onclick = () =>{ // this is second type to use event 
// //     // console.log('faisal');
// //     let a = 25;
// //     a++
// // //     // console.log(a)
// // };

// // let div = document.querySelector('div')

// // div.mouseover = ()=>{
// //     // console.log("you are inside the div")
// // }
// // //event obj********************************** e se denote kerte h

// // div.onmouseover=(e)=>{
// //     // console.log('farhan')
// //     // console.log(e.type);
// //     // console.log(e.target);
//     // console.log(e.clientX, e.clientY);
    

// // }
// //this is the third type of event the name is even listeners

// // Node.addEventListener( event, Callback)
// //node.removeEvetListener(event, callback)
// // note* the callback reference same to remove

// let btn1 = document.querySelector('#btn')


// btn1.onclick=()=>{
// console.log('ullu')
// }

// btn1.addEventListener('click', () => {//eventlister ka use ham is liye kerte h ki same handerler mai kaii baar kamm kara sake 
//     console.log('hello we are lerning js');
// });
// btn1.addEventListener('click', () => {
//         console.log('this is handler1');
        
// // });
// btn1.addEventListener('click', () => {
//         console.log('this is handler2');
        
// });
// const handler3 = () => {
//         console.log('this is handler3');
// };
// btn1.addEventListener('click', handler3);
        

// btn1.addEventListener('click', () => {
//         console.log('this is handler4');
        
// });
// btn1.removeEventListener('click',handler3 )


// let mode = document.querySelector('#mode');
// let currentMode = "light";

// mode.addEventListener('click',()=>{
//     if(currentMode === "light"){
//         currentMode = "dark";
//         document.querySelector("body").style.backgroundColor = "black"

//     }else{
//         currentMode = "light";
//         document.querySelector("body").style.backgroundColor = "white"
//     }
//     console.log(currentMode)

    

// })

let mode1 = document.querySelector("#mode1")
let moed2 = document.querySelector("#mode2")
let mode3 = document.querySelector("#mode3")
    mode1.addEventListener("click", ()=>{
        document.querySelector("body").style.backgroundColor ="red"
    });
    mode2.addEventListener("click",() =>{ 
        document.querySelector("body").style.backgroundColor ="green"
    });
    mode3.addEventListener("click", ()=>{
        document.querySelector("body").style.backgroundColor ="yellow"
    });

const div1 =document.querySelector("#div1");   
const div2 =document.querySelector("#div2");   
const div3 =document.querySelector("#div3");

div1.addEventListener("mouseover", () => {
    document.querySelector("body").style.backgroundColor= "red"
});
div1.addEventListener("mouseout", ()=>{
    document.querySelector("body").style.backgroundColor ="white"
});
div2.addEventListener("mouseover", () => {
    document.querySelector("body").style.backgroundColor= "green"
})
div2.addEventListener("mouseout", ()=>{
    document.querySelector("body").style.backgroundColor ="white"
});    
div3.addEventListener("mouseover", () => {
    document.querySelector("body").style.backgroundColor= "yellow"
});
div3.addEventListener("mouseout", ()=>{
    document.querySelector("body").style.backgroundColor ="white"
});  

