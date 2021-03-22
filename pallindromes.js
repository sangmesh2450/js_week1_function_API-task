let palind=(function(arr){
    var result=[]
    for(let ele of arr){
        let i=0,j=ele.length-1;
        flag = true;
        while(i<j){
            if(ele[i]===ele[j]){
                i++;
                j--;
            }
            else{
                flag=false;
                break;
            }
        }
        
        if(flag)
        result.push(ele);
    }
    return result;

})(["pip","racecar","sangmesh"])

console.log(palind)