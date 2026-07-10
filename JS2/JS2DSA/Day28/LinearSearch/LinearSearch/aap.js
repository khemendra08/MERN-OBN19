
//linear search 

//Question : if target is present in an array then print the index of the found target else print -1 if target is not founf 
let arr = [3,2,1,-10,0,77,66,5]
let target = 66
let idx = -1

    for(let i =0; i < arr.length; i++){
        if(arr[i] == target){
            idx = i
            break
        }
    }
    console.log(idx)
    
