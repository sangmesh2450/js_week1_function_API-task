let palind=(function(arr1,arr2){
    
    arr1.sort((a,b)=>{ return a-b;});
    arr2.sort((a,b)=>{ return a-b});
  
    let i= ((arr2.length+arr1.length)/2)-1;
    var ele = (arr1[0]>arr2[0])?arr1[0]:arr2[0];
    return arr1.concat(arr2)[i];


})([11,44,55,66,33],[88,65,77,12,6])

console.log(palind)