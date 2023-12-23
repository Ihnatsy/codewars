// ❓ DESCRIPTION:
//     Complete the square sum function so that it squares each number passed into it and then sums the results together.
//
//     For example, for [1, 2, 2] it should return 9

// 🥳 SOLUTION
function squareSum(numbers){
    let sum=0
    let n=2

    for (let i=0; i<numbers.length; i++) {
        let result=numbers[i]**n
        sum +=result
    }
    return sum
}

console.log("result = ", squareSum([1,2,3]))
