//Write selection sort function and return the sorted array in ascending order
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i+1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (i !== min) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}
// Test Selection Sort
console.log(selectionSort([5, 3, 4, 1, 2])); // [1, 2, 3, 4, 5]

// Write quick sort function to return the sorted array in ascending order using for loop
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let pivot = arr[arr.length-1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length-1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Test Quick Sort
console.log(quickSort([5, 3, 4, 1, 2])); // [1, 2, 3, 4, 5]