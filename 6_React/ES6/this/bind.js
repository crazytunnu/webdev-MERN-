function fn()
{
    console.log(this.person)
    function abc()
    {
        console.log(this.person);
    }
    let xyz=abc.bind(this);
    xyz();
}
let obj={
    person:"Arshad",
    fon:fn
}
obj.fon()