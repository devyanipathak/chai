//immediately Invoked Function Expressions (IIFE)

(function chai(){
    console.log(`DB connected`);
})();//these 1() are for function definition 2()are to invoke fun()
//chai()
//iifa is used to remove/avoid pollution of global scope.
//always   use ; to let it know where it ends context
(function chaiaurcode() {
    console.log(`DB connected 2`);
})();

( (name) => {
    console.log(`DB connected 2 ${name}`);
})('Devu')