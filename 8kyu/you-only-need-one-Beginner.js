// ❓ DESCRIPTION:
//     You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
//
//     Array can contain numbers or strings. X can be either.
//
//     Return true if the array contains the value, false if not.

// 🥳 SOLUTION:
function check(a, x) {
    return a.includes(x)
    // your code here
}

console.log(check([1,2,3,4], 3))
console.log(check(['q','e','z'], 'z'))
console.log(check([1,2,3,4], 9))
console.log(check(['q','e','z'], 's'))