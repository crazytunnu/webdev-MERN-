Array.prototype.myfun=function (arr=this) {
    for(let i=0;i<this.length;i++)
    console.log(this[i]);
}
let a=[1,2,3];
a.myfun();