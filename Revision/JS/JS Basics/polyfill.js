let arr=[1,2,3,4,5]
Array.prototype.myfilter=function (cb) {
    let ans=[];
    for(let i=0;i<this.length;i++)
     {
        if(cb(this[i]))
        {ans.push(this[i])}
     }
     return ans;
}
function even(a) {
    return a%2===0;
}
let x=arr.myfilter(even)
console.log(x);