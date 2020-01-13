function sumItems(array) {
  // Sum all the numbers in the array

  return array.reduce((element, i) => {
    if (Array.isArray(i)) {
      return element + sumItems(i);
    }
    return element + i;
  }, 0)
};

sumItems([1, 2, 3, 4, 5]); // console.log() => 15
sumItems([[1, 2, [[3], 4]], 5, []]); // console.log() => 15
sumItems([[[[[[[[[[[[[1]]]]]]]]]]]]]);// console.log()=> 1 


