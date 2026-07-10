
//Binary Search : works on sorted array


//when target does exist in array : this binary search code id for  ascending order
// let arr = [1,2,3,4,5,6]
// let target = 6
// let s = 0
// let e = arr.length-1

// while(s <= e){

//     let mid = Math.floor((s+e)/2)
    
//     if(arr[mid] == target){
//         console.log(mid)
//         break
//     }
//     else if(target > arr[mid]){
//         s = mid + 1
//     }
//     else{
//         e = mid - 1
//     }
// }


//when target does not exist in array
// let arr = [1,2,3,4,5,6]
// let target = 100
// let s = 0
// let e = arr.length-1
// let idx = -1

// while(s <= e){

//     let mid = Math.floor((s+e)/2)
    
//     if(arr[mid] == target){
//         idx = mid
//         break
//     }
//     else if(target > arr[mid]){
//         s = mid + 1
//     }
//     else{
//         e = mid - 1
//     }
// }
// console.log(idx)


//question : sorted in descending order
let arr = [8, 7, 6, 5, 4, 3, 2, 1, -10];
let target = 1;

let s = 0;
let e = arr.length - 1;
let idx = -1;

while (s <= e) {
    let mid = Math.floor((s + e) / 2);

    if (arr[mid] === target) {
        idx = mid;
        break;
    } 
    else if (target < arr[mid]) {
        // move right in descending array
        s = mid + 1;
    } 
    else {
        // move left
        e = mid - 1;
    }
}

console.log(idx);