//{code} -> Global execution context is first created
//at first Global EC is kept in this
//Javascript execution context:
//1) Global execution context,
//2) Function execution context,
//3) Eval execution context.

//Two phase: 
//1) memory creation phase or just creation phase.
//2) execution phase.

//call stack:
// global execution always exists in it.
 //  |          |
 //  |  three() |  three() will come out then two()
 //  |  two()   |   then one()
 //  |  one()   |
 //  |Global exe|
 //  |__________|

 function one(){
    console.log("one")
    two()
 }
 function two(){
    console.log("two")
    three()
 }
 function three(){
    console.log("three")
 }
 one()
 two()
 three()