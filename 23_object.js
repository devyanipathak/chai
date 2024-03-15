const myObject = {
    js : 'javascript',
    cpp : 'c++',
    rb : 'ruby',
    swift : "swift by apple"
}
//for in loop
// for(const key in myObject){
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }
const programming = ["js", "rb", "py", "java", "cpp"]
for(const key in programming){
  //  console.log(programming[key])
}



 const coding = ["java", "ruby", "js", "python", "flutter"]
// coding.forEach(function name(val) {
//     console.log(val);
// })

// coding.forEach((item) =>{//callback function.
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
//}
// coding.forEach(printMe)

coding.forEach((item, index, arr) => {
   // console.log(item,index,arr);
} )
 const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
 ]
 myCoding.forEach((item) => { 
    console.log(item.languageName);
 })