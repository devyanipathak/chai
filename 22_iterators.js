//for
// for (let index = 0; index < 10; index++) {
//     const element = index;
//     console.log(element);
// }

// for (let i = 0; i <= 10; i++) {
//     console.log(`Outerloop value: ${i}`)
//     for (let j = 0; j <= 10; j++) {
//        // console.log(`Inner Loop value: ${j}`)
//        console.log(`${i} * ${j} = ${i*j}`);
//     }
// }

// let myArray = ["flash", "batman", "superman"]
// for (let i = 0; i < myArray.length; i++) {
//     const element = myArray [i];
//     console.log(element);
// }
//in loops if it gets out of bounds it will return undefined.


//break and continue
// for (let i = 0; i <= 20; i++) {
//     if(i == 3){
//         console.log(`detected ${i}`);
//         break;
//     }
//     console.log(`Value of i is ${i}`);
    
// }
// for (let i = 0; i <= 20; i++) {
//     if(i == 3){
//         console.log(`Detected 3`);
//         continue;
//     }
//     console.log(`Value of i is ${i}`);
    
// }

//while loops and do-while loops.

//let index = 0;
// while(index <= 10){
//     console.log(`Value of index is ${index}`);
//     index = index + 2;
// }
// let myArray = ['flash', 'batman', 'superman']
// let arr = 0
// while(arr < myArray.length){
//     console.log(`Value is ${myArray[arr]}`);
//     arr = arr + 1;
// }

// let score = 11
// do{
//     console.log(`Score is ${score}`);
//     score ++;
// }while(score <= 10)


// And more loops

//for of loop

// ["", "", ""] 
// [{}, {}, {}]
// let arr = [1, 2, 3]
// for (const num of arr) {
//     console.log(num);
// }

// const greetings = "Hello World!"
// for(const greet of greetings){
//     console.log(`Each char is ${greet}`);
// }

//Maps => key value pair

const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('Fr', 'France')
map.set('IN', 'Idia')//it will overrite India with Idia.

//console.log(map)

for(const [key, value] of map){
 //   console.log(key, '-', value);
}

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}
for(const [key, value] of myObject){
   // console.log(key, '-', value);//object is not iteratable in this way.
}//There is some other way of iterating over objects


