"use strict"
let obj={
    name:"Arshad",
    f1:function (){
        function f2() {
            console.log(this);
        }
        f2.call(this);
    }
}
obj.f1()