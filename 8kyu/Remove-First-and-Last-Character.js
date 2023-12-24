// ❓ DESCRIPTION:
//     It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string.
//     You're given one parameter, the original string.
//     You don't have to worry with strings with less than two characters.

// 🥳 SOLUTION:
let str ='You got this!';

function removeChar(str){

    str= str.substring(1,str.length-1);
    return str;
}

console.log(str)
console.log(removeChar(str))