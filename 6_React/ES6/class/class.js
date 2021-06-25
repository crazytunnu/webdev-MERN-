class abc{
    constructor(name,age)
    {
        this.name=name;
        this.age=age;
    }
    sayHi() {
        console.log(this.name);
    }
}
let obj=new abc("arshad",22);
// console.log(obj);//------------full object print
obj.sayHi();//==========arshad
let x=obj.sayHi;
x()//===============error and not undefined like in normal cases, in classes function it gives error