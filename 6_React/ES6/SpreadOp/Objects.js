//--------------------Each object has its own address in hash
let obj={//--------------------address 10k
    name:"Arshad",
    address:{//----------------address 11k
        city:"Kol",
        extra:{//---------------address 12k
            pin:"9000000"
        }
    }
}
// let obj2=obj
// obj2.name="hdfjdhsf";
// console.log(obj);
// console.log(obj2);
// //Output----------
// {
//     name: 'hdfjdhsf',
//     address: { city: 'Kol', extra: { pin: '9000000' } }
//   }
//   {
//     name: 'hdfjdhsf',
//     address: { city: 'Kol', extra: { pin: '9000000' } }
//   }






// let obj2={...obj}
// obj2.name="hdfjdhsf";
// console.log(obj);
// console.log(obj2);
// op-----------
// { name: 'Arshad', address: { city: 'Kol', extra: { pin: '9000000' } } }
// {
//   name: 'hdfjdhsf',
//   address: { city: 'Kol', extra: { pin: '9000000' } }
// }













// let obj2={...obj}
// obj2.address.city="LKO";//------------------both address will change because only obj has been spreaded and not "address object"
// console.log(obj);
// console.log(obj2);
// // op-----------
// { name: 'Arshad', address: { city: 'LKO', extra: { pin: '9000000' } } }
// { name: 'Arshad', address: { city: 'LKO', extra: { pin: '9000000' } } }





// let obj2={...obj,address:{...obj.address,extra:{...obj.address.extra}}}
// obj2.name="Tunnu";
// obj2.address.city="London";
// obj2.address.extra.pin="2000000";
// console.log(obj);
// console.log(obj2);
// op
// { name: 'Arshad', address: { city: 'Kol', extra: { pin: '9000000' } } }
// {
//   name: 'Tunnu',
//   address: { city: 'London', extra: { pin: '2000000' } }
// }

