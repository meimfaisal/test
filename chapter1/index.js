// learn a js with hc++++++++++++++++++++++++++++++
"use strict" //this is use a new version of js 
let isNumber = "faisal"
// let convertingNumber = Boolean(isNumber);
// console.log(convertingNumber);
// 1 => true;0 => false;
// ""=> false;
// "fasial"=> true;

let someNumber = 33;
let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);

// whenever i wnat to change a numer into a srting and boolean and a number i can easly change ;

//*********************************** opretions *************************************** */

let value = 3;
let negValue = -value;
// console.log(negValue);
let str1 = 1
let str2 = 2
let str3 = str1 + str2;
// console.log(str3);
// console.log("1" + 2);
// console.log(1 + "2");
// console.log(1 + 1 + "2" );
// console.log("1+1" + 2);


//non primitives data type => array, object, function; this is a note;
//stack memory & heap memory find more and clear that 


let  myFunction = function(){

}


// back tic
 let myName = "faisal";
 let myProject = 100;
//  console.log(`my name is ${myName} and my project is ${myProject}`);


// let myString = new String('faisal');
// console.log(myString.length);
// console.log(myString.toLowerCase());
// console.log(myString.toUpperCase());
// console.log(myString.charAt(2));
// // console.log(myString.indexOf('faisal'));//there is a some confusion.
// console.log(myString.substring(0, 4));// it is not accept -ve value.
// console.log(myString.slice(0, 5));//also we give a nagetive value .
// console.log(myString.trim());// it is remove all the white space b/w all the string "    faisal   "/
// console.log(myString.includes('faisal'));//if faisal is present in my string when the value is true ! false
// console.log(myString.replace('a', 'z'));
// let myName1 = "mohd faisal";
// console.log(myName1.indexOf('f'));

let num1 = 5;
let num2 = 5;
let num3 = num1+num2;
// console.log(num3);
// console.log(num1*num3);
// console.log(num1/num2);
// console.log(num2*num3);
// console.log(num1 - num2);
// console.log();

// //++++++++++++++++++  array +++++++++++++++++++++++
// let gahr = [""]
// myArr.push("fardeen");
// console.log(myArr);
// console.log(myArr[3]= "ammi");




// myArr[0]= 10;
// console.log(myArr);

// let sum = 0
// let myArr = [1, 2, 3, 4, 5];
// for(let i=0; i< myArr.length; i++){

// i want to increse a 1-2 and 2-3 and 4-5 how can i do using loop
    

// }
// console.log()


// let marvelHeros = ["spiderman","superman","batman"];
// let dc_Heros = ["batman","thor","antman"];
// let allHeros = [...marvel_Heros, ...dc_Heros];
// const all_Heros= marvel_Heros.concat(dc_Heros);
// // console.log(all_Heros);
// for(let i = 0; i < marvelHeros.length; i++){
//     console.log(marvelHeros[i]);
//}
// +++++++++++++++++objects++++++++++++++++
//singleton
//object.create


//objects literals
// let mySym = Symbol("key1")//this is the way to define a symbol in object
const jsUser = {
    myName: "faisal",
    // [mySym]:"key1",
    age: 21,
    class: 14,
    email: "meimfaisal@gmail.com",
    rollNo: 12,
}
// console.log(jsUser["myName"]);
// console.log(jsUser.myName);
// console.log(typeof[mySym]);this is not fully samaj mai aya 
jsUser.age = 24; // thsi is the way to assign a value 
// console.log(jsUser);
// if you want to no change in obj so you can use the .freez
Object.freeze(jsUser)//this is one or property
myName = "fardeen"
// console.log(jsUser);

// ******++++++++(ager apko object ke ander object dalna ha toh dall sakte ha )++++++++++*******

let obj = {
    faisal:{
        name:{
            kaam: "no1"
        }
    }
}
// console.log(obj.faisal.name.kaam);      

const obj1 = {1: "faisal",2: "cat"}
const obj2 = {3: "fardeen",4: "bat"}

const obj3 = Object.assign({}, obj1, obj2)
// const obj3 = {...o
// bj1,...obj2}
// console.log(obj3);

let student ={
    name : "faisal",
    class: 10,
    age: 21,
}
// console.log(Object.keys(student));
// let value1 = Object.values(student);
//  let value2 = Object.entries(student);it convert a obj into a small small array.
// let value4 = Object.hasOwnProperty("class");it tells the class is present or not in the obj
// console.log(value1);

// API => is nothing it is a way to do are work by other.
// // jason model pe kaam kerta ha.
// {
//     "name":"faisal"// there are two method to define a api
//     "class": 10,
// }
// [
//     {},
//     {},
//     {}
// ]

// ************************** function ********************************
// function ak block of code hota ha jise ham ak baar likh
//ker kai baR CALL ker sakte h
// function section(){
//     console.log("f");
    // console.log("f");
//     console.log("f");
//     console.log("f");
//     console.log("f");
//     console.log("f");
// }
// // section()//yahan do cheez a one is refrence and second is exicution of a funtion

// function addMyCart(myCart){//here are some exicution
//     return myCart
// }
// console.log(addMyCart(2))
// const obj5 ={
//     name: "faisal",
//     class: 10,
//     rollNo: 11,
//     toAccess:function(){
//         console.log("marks:=",this.class);
//     },
// };
// obj5.toAccess();
// +++++++++++++++++++ {} +++++++++++++++++++++++++++++++++++
// const tinderUser = {}
// tinderUser.name = "faisal"
// tinderUser.class = 10
// tinderUser.group = "all"
// console.log(tinderUser)
// function addtonum(num1, num2){
//     return num1+num2

// }
//  addtonum( 2 , 5)
// console.log(addtonum)

// ++++++++++++++++++ arrow function  +++++++++++++ () = {} 
// const arrFuntion = (a, b) => {
//     return a + b
// }
const arrFuntion = (a, b) =>  (a + b) // this is second way to define a arrow fnc
const arrFuntion1 = (a, b) =>  a + b // this is second way to define a arrow fnc
    
//   console.log(arrFuntion(1 , 5))
// ****************************** IIFE ***************************()()

// (function faisal () {
//     console.log(`faisal`);
// })(); //if you want to two iife you can use; at the last of end
// function faisal (class1) {
//     console.log(`faisal ${class1}`);
// }
// faisal( "10")



// let yourName = "farhan"

// switch (yourName) {
//     case "faisal":
    //     console.log("my name is faisal");
    //     break;
    // case "farhan":    
    //     console.log("my name is farhan");
    //     break;
    // case "fardeen":    
    //     console.log("my name is fardeen");
    //     break;
    // default:
    //     console.log("ammi")
    //     break;
// }

// for (let i = 1; i <= 10; i++) {// this is the way to print a table
//     console.log("this is the table of :", i);
//     for (let j = 1; j <= 10; j++) {
//         console.log(i + ' * ' + j + ' = ' + i*j);
        
        
//     }
    
// }
// for (let i = 1; i < 10; i++) {
//     if (i == 5) {
//         console.log(`fasial is your lucky no ${i}`);
//         continue
        
//     }
//     console.log( "my lucky no", i)   
 
// }
//******************** while loop *************************** */
// let index = 0;
// while (index <= 10) {
//     console.log(`faisal is my name ${index}`)
//     index = index + 2
// }

// let arr = ["superman", "spiderman", "salmankhan"];
// let index = 0
// while (index < arr.length) {
// console.log(`these are the heros ${arr[index]}`)
//     index = index + 1
// }

// let score = 0//    this is do while loop
// do {
//     console.log(`you win the prize ${score}`)
//     score++
// } while (score < 5);

// let myArr = [1, 2, 3, 4, 5]
// for (const num of myArr) {
//     console.log(`counting ${num}`)
    
// }
// const greeting = "helle world!"
// for(let greet of greeting ){
//     console.log(greet)
// }

// ******************** maps ********************************

const myMap = new Map()
myMap.set("name", "faisal")
myMap.set("class", "10")
myMap.set("rpll", "19")
// console.log(myMap)
// for (const [key, value] of myMap) { // [] iska use is liye kiya gya ha ki key 
    // console.log(key, value)
                           // nikal jaye nhi toh key or value dono deta h
    
// }
// ******************** note watch video 29 ************
for (const key in myMap) {
    // console.log([key])
}

// ********************* for each loop mast ha *********************
const code = ["faisal", "name ", "class "];

// code.forEach(function (){})//this the simpply rule
code.forEach(function (val){//and second way
    // console.log(val)

})
code.forEach((faisal) => { // ye kaam arrow function ka use kerke iya gya ha
    // console.log(faisal)

})
// +++++++++++++++++++++++[{},{},{}]++++++++++++++++++++++++++++++++++++++++++++
// const ghar = [
//     {
//         faisal: 10,
//         fardeen: 21
    // },
//     {
//         ammi: 10,
//         papa: 21
//     },
//      {
//         ayat: 10,
//         consoel: 21
//     }
// ]
// ghar.forEach((item) => {
//     console.log(item.faisal);

// })
