let obj={
    name:"Arshad",
    address:{
        city:"Kolkata",
        pin:"10001"
    }
}

//shallow 
// let nObj={}
// for(x in obj){
//     nObj[x]=obj[x]
// }


// nObj.name="Hussain"
// nObj.address.city="Kota"
// console.log(obj);
// console.log(nObj);//////////////since reference of address is passed it is gonna change entirely




///Deep copy
let NOBJ=JSON.parse(JSON.stringify(obj))
NOBJ.address.city="Kota"
console.log(obj);
console.log(NOBJ);

