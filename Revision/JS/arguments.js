// function fn(x,y) {
//     console.log(arguments);
//     return x+y;
// }
// fn(2,4);
//O/P=[Arguments] { '0': 2, '1': 4 }


// function fn(x,y) {
//     console.log(arguments);
//     return x+y;
// }
// console.log(fn(2,4,3));



// function fn(){
//     // for(let i=0;i<arguments.length;i++)
//     // sum+=arguments[i];
//     return sum;
// }
// console.log(fn(1,2,5));

function fn(x){
    let sum=0;
    if(x=='a'){
        for(let i=1;i<arguments.length;i++)
        sum+=arguments[i];
    }
    else
    {
        sum=1;
        for(let i=1;i<arguments.length;i++)
        sum*=arguments[i];
    }
    
    return sum;
}
console.log(fn("m",1,2,5));