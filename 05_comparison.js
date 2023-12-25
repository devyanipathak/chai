//console.table([2>1, 2>=1, 2<1, 2==1, 2!=1]);
//console.log("2" > 1)
//console.log("02" > 1)//typescript does not allows to compare two different datatypes.
//In this case "2" is converted to number in order to get compared.


// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined >= 0);

//Should avoid such kind of coding habit.

//The reason is that an equality check == and comparisons > < >= <= work differently.
//Comparisons convert null to a number, treating it as 0.
//That's why (3) null >= 0 is true and (1) null > 0 is false.
//comparison and equality check are different in javascript.


// === is strict check for equality
//console.log("2" === 2);//false. Both are not equal because "2" is string and 2 is a number.
