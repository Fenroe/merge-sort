// merge sort is a divide and conquer sorting algorithm
// first we check the length of the array to see if it's not a single element
// if it is then return the array as it is sorted
// if not, find the halfway point using length / 2
// floor the result so that left is always smaller than right, just for consistency
// sort the sliced left and right halves of the array recursively
// create a new array to house the sorted joined array
// compare the leftmost smallest element in the left array with the same in the right array
// whichever is smaller, add it to the new array and remove it
// end this loop when the length of both smaller arrays is 0
// make sure to add a case in which a populated array is comparing itself against an empty one
// return the sorted array

const mergeSort = (array) => {
    if (array.length < 2) return array
    const midpoint = Math.floor(array.length / 2)
    const leftArray = mergeSort(array.slice(0, midpoint))
    const rightArray = mergeSort(array.slice(midpoint))
    const newArray = []
    while (leftArray.length > 0 || rightArray.length > 0) {
        if (leftArray.length === 0) {
            newArray.push(rightArray.shift())
            continue
        }
        if (rightArray.length === 0) {
            newArray.push(leftArray.shift())
            continue
        }
        if (leftArray[0] < rightArray[0]) {
            newArray.push(leftArray.shift())
        } else {
            newArray.push(rightArray.shift())
        }
    }
    return newArray
}

console.log(mergeSort([5, 2, 4, 1, 3, 6]))