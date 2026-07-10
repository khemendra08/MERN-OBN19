//Recursion question 


//1. print number from 1 to n 
// function print(i, n){
//     //base case 
//     if(i >n) return
//     console.log(i)
//     print(i+1, n)
// }
// print(1,5)


// 2.Print numbers from n to 1

// function print(i, n) {
//     // base case
//     if (i > n) return;

//     // recursive call
//     print(i + 1, n);

//     // print while backtracking
//     console.log(i);
// }

// print(1, 5);



//3. Sum of N natural number 
//with reverse 
//case 1 : on the way back :-> base case se return hote time ans preapare ho rah ah 
// function numberSum(N){

//     //base case 
//     if(N == 1){
//         return 1
//     }

//     //recursive call 
//     return N + numberSum(N-1)
// }
// console.log(numberSum(5))


//case 2: On the way up : Base case ki taraf jaate hue ans bn raha h 
// function numberSum(N, sum){

//     //base case 
//     if(N == 0){
//         return sum
//     }

//     //recursive  call 
//      return numberSum(N-1, sum+N)
// }
// console.log(numberSum(5, 0))


//3.1 , with straight loop
//on the way back
// function numberSum(N, curr){
//     if(curr == N){
//         return curr

//     }
//     return curr + numberSum(N, curr+1)
// }
// console.log(numberSum(5,1))


//on the way up
// function numberSum(N , curr, sum){
//     if(curr == N){
//         return sum+curr

//     }
//     return numberSum(N, curr+1, sum+curr)
// }
// console.log(numberSum(5, 1,0))



//4. Print number in reverse 
//o/p: 5
// 4
// 3
// 2
// 1
// function printrev(n){
//     if(n == 0){
//         return
//     }

//     console.log(n)
//     printrev(n-1)
// }
// printrev(5)


//print in one line , O/p: 5,4,3,2,1
// let str = " "
// function printrev(n){
//     if(n == 0){
//         console.log(str)
//         return 
//     }
//     str += n + " "
//     printrev(n-1)

// }
// printrev(5)

//4.3 reverse number without making global variable 
// function printrev(n, ans){

//     if(n == 0){
//         console.log(ans)
//         return 
//     }

//     printrev(n-1, ans + n + " ")

// }
// printrev(5, " ")

//4.4: on the way back 
// function printrev(n){
//     if(n == 1){
//         return   1
//     }
//     return n + " "+ printrev(n -1)

// }
// console.log(printrev(5))


//4. print number till N recursively 
// i/p : 5
//o/p:1 2 3 4 5
//on the way up 
// function printTillN(N, i, ans){

//     if(i > N){
//         console.log(ans)
//         return
//     }

//     ans += i + " "
//     printTillN(N, i+1, ans)

// }
// printTillN(5, 1, " ")

//4.1: On the way back 
// function printTillN(N , i){

//     if(i == N) return i
//     return i + " " + printTillN(N, i + 1)
// }
// console.log(printTillN(5,1))

    
 


//5. Prod of N natural number 
//i/p:- 5
//o/p: 5 * 4* 3* 2* 1 = 120

// function prod(n){

//     if(n == 1){
//         return n
//     }

//    return  n * prod(n-1)

// }
// console.log(prod(5))



//6. Print right angled triangle star pattern using recursion 
// function solve(n , str){

//     if(n == 0) return 

//     str += " *"
//     console.log(str)
//     solve(n-1, str)
// }
// solve(5," ")





//7. Print range recursively 
//input : 5  8
//output : 5 6 7 8

// function printXY(X, Y, ans){

//     if(X >Y){
//         console.log(ans)
//         return 
//     }

//     ans += X + " "
//     printXY(X+1, Y, ans)

// }

// printXY(5,8," ")


//8. you are given a number N . You have to print the backward counting 
//from N to 1 . On reaching 1 , you have to print counting from 1 to n 
//input : 4
//output : 4 3 2 1 1 2 3 4
// N -> 1 -> N
// function printID(n){

//     if(n == 0) return 
//     console.log(n)
//     printID(n-1)
//     console.log(n)
// }
// printID(5)

//8.1: variation of above question 
// input 5
//output : 1 2 3 4 5 4 3 2 1
//1 -> N -> 1

// function printID(i , n){
//     if(i > n) return 

//     console.log(i)
//     printID(i+1, n)
//     console.log(i)
// }
// printID(1, 5)

//9. Power calculation 
//case 1 : Brute force : O(n)
// function power(x, n){
//     //base case 
//     if(n == 0) return 1
//     return x * power(x, n-1)
// }
// console.log(power(2,4))

//case 2: optimize : O(log n)

// function power(x, n){

//     //base case 
//     if(n == 0) return 1

//     //recursive case : divide the problem into half 
//     const half = power(x, Math.floor(n/2))

//     if(n % 2 == 0){
//         //when n is even 
//         return half * half
//     }
//     else{
//         //when n is odd
//         return x * half * half 

//     }
// }
// console.log(power(2,8))


//9. print "ACCIOJOB" n times 
// function solve(n){
//     if( n == 0) return 
//     console.log("ACCIOJOB")
//     solve(n-1)
// }
// solve(3)


//10. Fibonacci series : sum of previous two number = next number 
// 0,1,1,2,3,5,8,13,..............
// function fib(n){
//     //base case 
//     if(n == 1) return 0
//     if(n == 2) return 1
//     return fib(n-2) + fib(n-1)

// }
// console.log(fib(10))


//11. sum of array element 
// function sumOfArrayElement(arr){

//     //base case 
//     if(arr.length == 1){
//         return arr[0]
//     }

//     let element = arr.shift()
//     return element + sumOfArrayElement(arr)
// }
// console.log(sumOfArrayElement([1,2,3,4,5]))

//11.1
// function sumOfArrayElement(arr, i){
//     if(i == arr.length-1){
//         return arr[i]
//     }
//     return arr[i] + sumOfArrayElement(arr, i+1)
// }
// console.log(sumOfArrayElement([4,7,9,3,44], 0))




//12. find smallest number in an array using recursion 
// function findMin(arr, i, n){

//     //base case 
//     if(i == n-1){
//         return arr[i]
//     }

//     return Math.min(arr[i], findMin(arr, i+1, n))
    
// }
// let arr = [1,3,8,9,-1,10,4,67,77]
// console.log(findMin(arr, 0 , arr.length))


//13. Find max element in an array 
// function findMax(arr, i , n){
//     if(i == n-1) return arr[i]

//     return Math.max(arr[i], findMax(arr, i+1, n))
// }
// let arr = [1,3,8,9]
// console.log(findMax(arr, 0, arr.length))


//14. reverse a string 
// function reverseStr(str){

//     //base case 
//     if(str.length == 0) return ""

//     //recursive  call
//     return str[str.length-1] + reverseStr(str.substring(0, str.length-1)) 

// }
// console.log(reverseStr("hello"))

//14.1 without using any inbuilt function
// function reverseStr(str, i=0){

//     //base case 
//     if( i== str.length) return " "
//     return reverseStr(str, i+1)+str[i]
// }
// console.log(reverseStr("javascript"))


//15 find  Indices 
//i/p: 6, x = 2
// [1,2,3,2,3,5]
//o/p: 1, 3

// function findX(arr, n , x){

//     function helper(arr, i, str){

//         if(i == n-1){

//             if(arr[i] == x){
//                 str += i + " "
//             }
//             console.log(str)
//             return
//         }
//         if(arr[i] == x){
//             str += i + " "
//         }  
//         helper(arr, i+1, str)
//     }
//     helper(arr, 0, "")
// }
// findX([1,2,3,2,3,5], 6,2)

//16 check whether array is palindrome or not 
// function isPalindrome(arr, s, e){
//     if( s>= e) return 1
//     if(arr[s] != arr[e]) return 0
//     return isPalindrome(arr, s+1, e-1)
// }
// let arr = [1,2,5,7,8,9]
// console.log(isPalindrome(arr, 0, arr.length-1))

//17. Recursive multiplication 
// function multiplyRecursively(n, m){
//     if(m == 1) return n 
//     return n + multiplyRecursively(n, m-1)
// }



//18. find the last occurance of an element in an  array
// case 1: loop will run L->R: sidha loop
// function lastIndex(A, T, startIndex){

//     function helper(i, ans){

//         if( i == A.length){
//             return ans 
//         }
//         return helper(i+1, A[i] == T ? i : ans)
//     }
//     return helper(startIndex, -1)
// }


//case2 : when loop will run R->L(reverse loop)
// function lastIndex(A, T, startIndex){

//     //base case 
//     if(startIndex < 0) return -1

//     if(A[startIndex] == T) return lastIndex

//     return lastIndex(A, T, startIndex-1)
// }


//19. count occurance of an element in an array 
//case 1: using loop : using inbuilt function 
// function countOccurance(arr, target){
//     let count = 0
//     while(arr.length > 0){
//         let last = arr.pop()//remove last element

//         if(last == target){
//             count++
//         }
//     }
//     return count
// }

//case 2: using loop: without inbuilt function
// function countOccurance(arr, target){
//     let count =0
//     while(arr.length > 0){

//         let lastelement = arr[arr.length-1]//Access last element

//         if(lastelement == target){
//             count++
//         }
//         arr.length--
//     }
//     return count
// }
// let arr= [2,3,1,4,5,1,1,1]
// console.log(countOccurance(arr, 1))


//19.1 : recursively : 3 possible case 
//case 1 : with extra variable:1.)either print, 2.)either return 
//case 2 : with no extra variable : return the val 

//case 1: with extra variable 
// function countOccurance(n){
//     function helper(n , count){
//         //base case 
//         if(n == 0){
//             //console.log(count)
//             return count
//         }
//         let ld = n % 10
//         n = Math.floor(n/10)

//         if(ld == 1){
//             count++
//         }
//         return helper(n, count)
//     }
//     return helper(n , 0)
// }


// //case 2: with no extra variable 
// function count(n){
//     if(n == 0) return 0
//     let ld = n % 10
//     n = Math.floor(n/10)

//     if(ld == 1){
//         return 1 + count(n)
//     }
//     else{
//         return count(n)
//     }
// }


//19. 2 : count occurance of an element in an array 
// function countArrayOccurance(arr, target, i=0){
//     //base case 
//     if( i == arr.length){
//         return 0
//     }
//     //if current element matched target 
//     if(arr[i] == target){
//         return 1+countArrayOccurance(arr, target, i+1)
//     }
//     //otherwise move to next index 
//     return countArrayOccurance(arr, target, i+1)
// }
// console.log(countArrayOccurance([1, 2, 3, 2, 4, 2], 2));


//20 : print reverse Array using recursiion 
function reverseArr(arr, i, n){
    //base case 
    if( i == n ) return " "
    return reverseArr(arr, i+1, n) + arr[i]+" "
}
console.log(reverseArr([1,2,3,4,5], 0, 5))



