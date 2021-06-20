//------------------------------Add 100 at index 2 without using for loop+push method
let arr=[1,2,3,4,5,6];
// let arr2=arr
// arr2[0]=100;
// console.log(arr);
// console.log(arr2);
// //output-------------------------same address so both will change
// // [ 100, 2, 3, 4, 5, 6 ]
// // [ 100, 2, 3, 4, 5, 6 ]


// let arr2=[...arr];
// arr2[0]=100;
// console.log(arr);
// console.log(arr2);
// op-----------------------------Due to spreadOp elemets of that arr assign to [this block] as a whole new address
// [ 1, 2, 3, 4, 5, 6 ]
// [ 100, 2, 3, 4, 5, 6 ]





//How to do the add 100 at idx 2?


// let arr2=[arr.slice(0,2),100,arr.slice(2)]//-------------slice gives another array
// let correctMethod=[...arr.slice(0,2),100,...arr.slice(2)]//--------slice will give array and ... will extract all element from slice array
// console.log(arr2)
// console.log(correctMethod)
// op
// [ [ 1, 2 ], 100, [ 3, 4, 5, 6 ] ]
// [
//   1, 2, 100, 3,
//   4, 5,   6
// ]