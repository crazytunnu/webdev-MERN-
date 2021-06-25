function fn()
{
    console.log(this.person)
}
let obj={
    person:"Arshad",
    fon:fn
}
// fn();//---------------output is undefined because no object is passed with fn() call;
// obj.fon();//Arshad is printed;


// let xyz=obj.fon;
// xyz();//undefined=========bc xyz only has address of fn() and when called without object its default address is window


let xyz=obj.fon();//==Arshad because obj.fon() is called but xyz becomes undefined since fn() doesnt return anything