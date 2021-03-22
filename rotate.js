let rotatedArray =(function (arr,k) {
    return arr.slice(k,arr.length)+arr.slice(0,k);
  })([1, 2, 3, 4, 5, 6, 7, 8, 9],3);
  console.log(rotatedArray)