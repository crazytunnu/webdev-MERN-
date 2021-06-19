let person={name:'Arshad',age:"22",job:'SWE'}



// let name=person.name;
// let job=person['job'];
// console.log(name,job);




// let {name,job,xyz}=person;
// console.log(name,job,xyz);/////////////////////xyz will be undefined////////////////////////




// let {name:naam,age:umar}=person
// console.log(naam,umar);


/////////////////////////////////////////////DEfault Value/////////////////////////////////////////
let{name,xyz="Default",age="100"}=person;//not undefined in this case
console.log(name,xyz,age);


