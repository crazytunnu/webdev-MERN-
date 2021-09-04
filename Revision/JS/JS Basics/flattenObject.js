let obj={
    name:"Arshad",
    age:"22",
    address:{
        city:"Kolkata",
        pin:"700058"
    }
}
// console.log(obj);
function flatten(obj,parent,res={}) {
    for(let key in obj)
    {
       
       let propName=parent?parent+"_"+key:key;
        if(typeof obj[key]==='object'&&!Array.isArray(obj[key]))
        {
            console.log(".");
            flatten(obj[key],key,res);
        }
        else{
            res[propName]=obj[key];
        }
    }
    return res;
}
let fobj=flatten(obj);
console.log(fobj);