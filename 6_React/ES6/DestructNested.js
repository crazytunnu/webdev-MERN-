const { log } = require("console");

let user={
    id:332,
    name:"Arshad",
    education:{
        degree:"Master",
        college:{
            name:"REC",
            location:"Kannauj"
        }
    }
}


// let {education}=user;
// console.log(education);


// let {education:padhai}=user;
// console.log(padhai);




///---------------------------------------------NESTing----------------------------------very similar ot above(as operator)




let {education:{degree}}=user; //instead of let x=user.education.degree
console.log(degree);    // this also works-> let {education:{degree:xyz}}=user
