let result = (function (arr) {
    let array = [];
    for (let ele of arr) {
        var flag = true;
      for (let i=2;i<ele;i++){
          if(ele%i===0){
                flag = false;
                break;
          }
      }
      if(flag){
          array.push(ele);
      }
    }
    return array;
  })([ 2, 3, 4, 5, 6, 7, 8, 9]);

  console.log(result);