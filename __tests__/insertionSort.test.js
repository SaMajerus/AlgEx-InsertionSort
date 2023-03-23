import insertionSort from '../src/insertionSort.js';

describe('insertionSort', () => {

  const unsortedArray = [9,5,7,3,15,12]; 

  test('should a sorted array', () => {
    expect(insertionSort(unsortedArray)).toEqual([3,5,7,9,12,15]);
  });
});