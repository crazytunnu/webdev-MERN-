const object={
    who:'World',
    greet(){
        return `Hello, ${this.who}`;
    },
    farewell:()=>{
        return `Goodbye, ${this.who}`
    }
};

console.log(object.greet())
console.log(object.farewell())

//O/p
// Hello, World
// Goodbye, undefined
// since arrowfunction takes 