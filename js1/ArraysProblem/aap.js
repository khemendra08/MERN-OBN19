
//1. Reverse an Arrays


//Method 1: Using inbuilt-Function

// function reverseArray(arr){

//     return arr.reverse()
// }
// console.log(reverseArray([1,2,3,4,5]))


//Method 2 :With extra space

// let arr = [3,6,8,33,67,80]
// let ans = []
// for(let item of arr){
//     ans.unshift(item)
// }
// console.log(ans)

//Method 3 : using reverse loop 

// let arr = [4,5,6,7]
// let ans = []
// for(let i = arr.length-1; i>=0; i--){
//     ans.push(arr[i])

// }
// console.log(ans)

//Method 4: No extra place / In place reverse -> Two pointer Approach 
// let arr = [ 2,5,0,56,4,3,6]
// let start = 0
// let end = arr.length-1
// while(start < end){
//     let temp = arr[start]
//     arr[start] = arr[end]
//     arr[end] = temp
//     start++
//     end--
// }
// console.log(arr)

//-----------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------

//2.sum Of Arrays 
// function Sum(arr,n ){
//     let sum =0 
//     for(let item of arr){
//         sum += item
//     }
//     return sum 
// }
// console.log(Sum([1,3,4,5,6,7,8],7))

//-----------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------

//3.Product of Array 
// function productArray(arr){
//     let prod = 1
//     for(let item of arr){
//         prod *= item
//     }
//     return prod
// }
// console.log(productArray([3,5,7,8]))

//-----------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------

//4. Avg grade 
// function averageGrade(arr){
//     let sum =0
//     for(let item of arr){
//         sum += item
//     }
//     let avg = sum /arr.length
//     return avg
// }
// console.log(averageGrade([33,55,66,77,80]))

//-----------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------
//5. print even and odd index of the array 
// function evenIndex(arr){
//     let ans = []
//     for(let i =0; i<arr.length; i+=2){
//         ans.push(arr[i])

//     }
//     return ans 
// }

//odd index 

// function oddIndex(arr){
//     let n = arr.length
//     let ans = []
//     for(let i =0; i<n; i++){
//         if( i % 2 !== 0){
//             ans.push(arr[i])
//         }
//     }
//     return ans
// }
// console.log(oddIndex([1,5,7,8,0,6]))



//-----------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------
//6.Print all the element of array 
// let arr = [2,5,7,8,34,51,45]
// for(let item of arr){
//      console.log(item)
   

// }

//Through push method 
// let arr = [2,5,7,8,34,55,45]
// let result = []
// for(let item of arr){
//     result.push(item)
// }
// console.log(result) 

//-----------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------
//7.Find sum of all element of array 
// let arr = [2,4,67,89,55]
// let sum =0
// for(let item of arr){
//     sum+=item

// }
// console.log(sum)

//-----------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------
//8.sum of even and odd element 
// let arr = [22,54,6,8,33,60,100]
// let evenSum = 0
// let oddSum = 0
// let n = arr.length
// for(let i =0; i<n; i++){
//     if(i % 2== 0){
//         evenSum+=arr[i]
//     }
//     else if(i % 2!=0){
//         oddSum += arr[i]
//     }
// }
// console.log(evenSum, oddSum)

//-----------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------

//9.Find max element in array 
// function maxArray(arr){
//     let max = arr[0]
//     for(let item of arr){
//         if(item > max){
//             max = item
//         }
//     }
//     return max
// }
// console.log(maxArray([2,45,6,4,56,444,56,78,]))

//-----------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------
//10. Find min element of Array 
// function minArray(arr){
//     let min = arr[0]
//     for(let item of arr){
//         if(min > item ){
//             min = item 
//         }
//     }
//     return min

// }
// console.log(minArray([2,45,6,4,56,1,444,56,78]))

//-----------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------
//11. Write a program to find the max and second max element of an array 

//Method1 : using two loop

// function secondmax(arr){
//     let max = arr[0];

//     for(let item of arr){
//         if(item > max){
//             max = item;
//         }
//     }

//     let secondMax = -Infinity;

//     for(let item of arr){
//         if(item > secondMax && item < max){
//             secondMax = item;
//         }
//     }

//     return secondMax;  
// }

// console.log(secondmax([2,4,5,67,89,22,0,12,3]));

//Method 2 : Using single loop 

// function SecondMax(arr){
//     let max = -Infinity
//     let sMax = - Infinity
//     for(let item of arr){
//         if(item > max ){
//             sMax = max
//             max = item
//         }
//         else if(item >sMax && item < max ){
//             smax = item 
//         }
//     }
//     return sMax

// }
// console.log(SecondMax([21,41,56,77,22,89]))


//-----------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------
//12. Find the third max of Array element 
// function maxNumber(arr){
//     let max = - Infinity
//     let sMax = - Infinity
//     let tMax  = - Infinity

//     for(let item of arr){
//         if(item > max ){
//             tMax = sMax
//             sMax = max 
//             max = item 
//         }
//         else if(item > sMax){
//             tMax = sMax
//             sMax = item 
//         }
//         else if(item > tMax){
//             tMax = item 
//         }
//     }
//     return [max , sMax, tMax]

// }
// console.log(maxNumber([21, 41, 56, 77,22,89]))

//-----------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------
//13. Write a program to find the second min element of array 
// function secondMin(arr){
//     let min = Infinity
//     let Smin = Infinity
//     for(let item of arr){
//         if(item < min){
//             Smin = min
//             min = item 
//         }
//         else if(item < Smin && item > min){
//             Smin = item 
//         }
//     }
//     return [min,Smin]
// }
// console.log(secondMin([21,41,56,77,22,89]))

//-----------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------
//14. Write a program to find the Minimum , second min and third min element of an Array 

// function findMin(arr){
//     let min = Infinity
//     let SecMin = Infinity
//     let ThiMin = Infinity
//     for(let item of arr){
//         if(item < min){
//             ThiMin = SecMin
//             SecMin = min 
//             min = item 
//         }
//         else if(item < SecMin){
//             ThiMin = SecMin
//             SecMin = item 
//         }
//         else if(item < ThiMin){
//             ThiMin = item 
//         }
//     }
//     return [min, SecMin, ThiMin]
// }
// console.log(findMin([21,41,56,77,22,89]))


//-----------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------
//15. Last index of an Array 

// Methhod 1 : When loop run (L -> R)

// function lastOccurance(arr){
//     let target = 9
//     let ans = -1
//     for(let i =0; i< arr.length; i++){
//         if(arr[i] == target ){
//             ans = i
//         }
//     }
//     return ans 
// }
// console.log(lastOccurance([1,2,3,4,9,5,6,7,4,5,6,7,8,9]))

//Method 2 : Using reverse loop 
// function Lastocc(arr){
//     let target = 9
//     let ans = -1
//     for(let i= arr.length-1; i>=0; i--){
//         if(arr[i] == target){
//             ans = i 
//              break
//         }
//     }
//     return ans 
        
// }
// console.log(Lastocc([1,2,3,4,9,5,6,7,4,5,6,7,8]))


