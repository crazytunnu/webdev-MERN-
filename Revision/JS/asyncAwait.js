async function fun() {
    let x=await setTimeout(()=>{return "10"},5000)
    console.log("hello");
    console.log(x);
}
fun();
console.log(1);