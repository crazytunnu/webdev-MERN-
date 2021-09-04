function A() {
    let a=100;
    return function B() {
        console.log(a);
    }
}
let f=A();
f();