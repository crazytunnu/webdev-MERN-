// function square(i)
// {
//     return i*i;
// }
// let arr=[1,2,3,4,5]
// let dbarr=arr.map(square);
// console.log(dbarr)
//-------------------------------------------Filter
// function lengthGreater(s)
// {
//     if(s.length>=6)return true;
//     else return false;
// }
// let arr=["sdkjlas","sajdl","lkadsjl","sadhkjasdk","dkd"];
// let sarr=arr.filter(lengthGreater);
// console.log(sarr);



//==============================Reduce
function product(acc,cval)
{
    return acc*cval;
}
const arr=[1,2,3,4,5];
const ans=arr.reduce(product);
console.log(ans);