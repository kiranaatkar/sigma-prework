/*
Given an array of integers, return the highest and lowest numbers in the array (without using Math.max() or Math.min())


Some example inputs and outputs would look like the below:

[2, 4, 1, 0, 2, -1] should return [-1, 4]

[20, 50, 12, 6, 14, 8] should return [6, 50]
*/


const highestAndLowest = function (arr) {
    console.log("Input array: " + arr)

    let sortedArray = arr.sort((a, b) => (a - b))
    // sort() sorts alphabetically so use a sort function to sort in numerical order
    console.log("Sorted array: " + sortedArray)

    let returnArray = [sortedArray[0], sortedArray[sortedArray.length-1]]
    console.log("Highest and Lowest values: " + returnArray)
}

highestAndLowest([2, 4, 1, 0, 2, -1])
highestAndLowest([20, 50, 12, 6, 14, 8])