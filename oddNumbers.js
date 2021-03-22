(function(arr){
    for(let ele of arr){
        if((ele&1)===1){
            console.log(ele);
        }
    }

})([1,2,3,4,5,6,7,8,9])