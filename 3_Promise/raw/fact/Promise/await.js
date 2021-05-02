console.log("Before")
let fs=require("fs");
let a=["./f1.txt","./f2.txt","./f3.txt","./f4.txt"];
async function cb(){
    for(let i=0;i<4;i++)
    {
        let data= await fs.promises.readFile(a[i]);
        console.log(""+data);
    }
}
cb();
console.log("after");