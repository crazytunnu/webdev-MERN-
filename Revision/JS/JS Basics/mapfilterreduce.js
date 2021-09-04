let arr=[1,2,3,4,5,6,7,8]

let doubleArr=arr.map((e)=>{
    return e*2
})
console.log(arr);
// console.log(doubleArr);


let evenArr=arr.filter((e)=>{
    return e%2==0
})
console.log(evenArr);










//reduce
let sum=arr.reduce((x,y)=>{
    return x+y;
})
console.log(sum);