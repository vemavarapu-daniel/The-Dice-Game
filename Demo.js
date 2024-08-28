"use strict";

//Use includes, splice, filter ,,, use move to rearrange 

let first_Name=prompt("Enter Name of Person1")
let second_Name=prompt("Enter Name of Person1")



let a=first_Name.toUpperCase().split("");
let b=second_Name.toUpperCase().split("")

let countSimilar = b.filter(elements => a.includes(elements));

let count = countSimilar.length
console.log
let total = (a.length - count) + (b.length - count ) //temp

console.log(`a=${ a}, b= ${b }, CS = ${countSimilar}, Count = ${total}`);
console.log(`Total Unmatched Characters: ${total}`);






let flames = "FLAMES".split("");

while (flames.length > 1) {
    let removeIndex = (total % flames.length) - 1;

    if (removeIndex >= 0) {
        // Remove the character at removeIndex and reorder the array
        flames = flames.slice(removeIndex + 1).concat(flames.slice(0, removeIndex));
    } else {
        // Remove the last character
        flames.pop();
    }

    console.log(`Remaining FLAMES: ${flames.join("")}`);
}

console.log(`last - ${flames}`)





   


