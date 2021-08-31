"use strict";



//Global this
console.log(this);// same as non strict mode



// //inside fuction
// function A() {
//     console.log(this);
// }
// A();//this is undefined




//inside object's immidiate function
// let obj={
//     name:"Arshad",
//     fn:function (){
//         console.log(this);
//     }
// }
// obj.fn();// get the entire object




//inside non immediate function
let obj={
    name:"Arshad",
    fn:function (){
        function f2(){
            console.log(this);
        }
        f2();
    }
}
obj.fn();// same as 2nd case ie undefined