//January 1, 1970 => the epoch date is calculated in milliseconds from this date.

//Date has been a long standing pain point in ECMA-script.
//TC39 is working on Temporal a date/time API.
// let myDate = new Date()
// console.log(myDate.toString());
// //Wed Dec 27 2023 17:05:15 GMT+0530 (India Standard Time)

// console.log(myDate.toISOString());
// //2023-12-27T11:36:16.806Z

// console.log(myDate.toJSON());
// //2023-12-27T11:38:08.752Z

// console.log(myDate.toDateString());
// // Wed Dec 27 2023

// console.log(myDate.toTimeString());
// // 17:11:02 GMT+0530 (India Standard Time)

// console.log(myDate.toLocaleString());
// //27/12/2023, 5:13:06 pm

// console.log(typeof myDate);//object

let myCreatedDate = new Date(2023, 0, 23)//0->january
//("2023-01-14")
// console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
//These return value in milliseconds

//console.log(Math.floor(Date.now()/1000));
let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

// `${newDate.getDay()} and the time`

newDate.toLocaleString('default',{
    weekday: "long",
    
})