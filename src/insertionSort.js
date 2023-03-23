//Solution from Lsn 3 (for reference)--
/*
function insertionSort(array) {
  for (let index = 1; index < array.length; index++) {
    let indexOfSortedSection = index - 1;
    let valueToInsert = array[index];
    while (array[indexOfSortedSection] > valueToInsert) {
      let newValue = array[indexOfSortedSection];
      array[indexOfSortedSection + 1 ] = newValue;
      indexOfSortedSection--;
    }
    array[indexOfSortedSection + 1] = valueToInsert;
  }
  return array;
}
*/



function insertionSort(array) {
  // for(let i = 1; i < array.length; i++){  //'i' is the reference index. 
  //   let indexOfSortedSection = i-1; 
  //   let valueToInsert = array[i];
    
  //   while (array[indexOfSortedSection] > valueToInsert){  //Executes Insertion-Sort operation on Sorted Section, and repeats until everything in the section is sorted once more. 
  //     let newVal = array[indexOfSortedSection];
  //     array[indexOfSortedSection+1] = newVal;
  //     indexOfSortedSection--;   
  //   }
  //   array[indexOfSortedSection+1]=valueToInsert;
  // }
  // return array; 
}

export default insertionSort;