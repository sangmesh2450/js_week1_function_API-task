(function (arr) {
  
    let s = new Set();
    for (let ele of arr) {
      s.add(ele);
    }
    console.log(s);
  })([2, 2, 3, 3, 5, 6, 7, 7, 9,10,10]);