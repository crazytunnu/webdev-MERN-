const object={
    message:"Hello world!",
};
function logMessage(){
    console.log(this.message);
}
let x=logMessage.bind(object);
x();