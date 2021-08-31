let p=new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve("Kaam Hua")
        reject("nhi hua")
    },2000)
})
p.then(function(value){
    console.log(1);
    console.log(value);
    return value;
}).then(function(value){
    console.log(2);
    console.log(value);
}).catch(function(err){
    console.log("Kaam nhi hua");
    console.log(err);
})