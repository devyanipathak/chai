// switch(key){
//     case value: 
//          break;

//     default: 
//         break;
// }
const month = 3
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
       // break;//if we don't use this break then all the cases below it except default will match and show output.
    case 4:
        console.log("April");
        break;     

    default:
        console.log("Not of these four months")
        break;
}