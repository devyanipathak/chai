//const tinderUser = new Object();//Singleton object
const tinderUser = {}//non - singleton object
const ke = Symbol("key");
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
tinderUser[ke] = "Rolls Royce"
//console.log(tinderUser);

const regularUser ={
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Devyani",
            lastname: "Pathak"
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname);
//There are two ways of merging: assign & spread.
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({},obj1, obj2, obj4)
//here {} is an empty target and all other objects are source.
//console.log(obj1);//when we don't put {} obj1 is target object.

//we can also use spread operator to merge objects into one object.
const obj3 = {...obj1, ...obj2, ...obj4};
//console.log(obj3)
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))


/***************De-structuring and API************** */
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}
//course.courseInstructor
const {courseInstructor} = course;
console.log(courseInstructor);

//we can also rename courseInstructor in short
const {courseInstructor: instructor} = course;
console.log(instructor);

/************ JSON APIs ************* */
//This is JSON
// {
//     "name": "Devyani Pathak"
//     "coursename": "js in hindi",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]
