// //Global
// console.log(this);//----------represent empty object;


// //Global function k andar
// function A() {
//     console.log(this);
// }
// A();//=======================global object




//inside an object's immediate function
// let obj={
//     name:"Arshad",
//     fun:function() {
//         console.log(this);
//     }
// }
// obj.fun();//immidiate function get object as this




//non immidate function 
let obj={
    name:"Arshad",
    fun:function() {
        function fun2(){
            console.log(this);
        }
        fun2();
    }
}
obj.fun();//immidiate function get global object as this