function fn()
{
    console.log(this.person)
    function abc()
    {
        console.log(this.person);
    }
    abc();
}
let obj={
    person:"Arshad",
    fon:fn
}
obj.fon();//ARshad,undefined b/c abc() has been called without object notation