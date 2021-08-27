//create a function which has a local array in closure, this function will return another function, which will take 2 
//arguments 2nd being optional such that if returned function is f("insert",n),f("out"),f("show");

function queue() {
    let arr=[];
    return function(op,val){
        if(op==="insert")
        {
            arr.push(val);
        }
        else if(op==="out"){
            arr.shift();
        }
        else{
            console.log(arr);
        }
    }
}
let f=queue();
f("insert",10)
f("insert",20)
f("insert",30)
f("insert",40)
f("show");
f("out")
f("show")