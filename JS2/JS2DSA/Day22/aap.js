//Day 22 : Nested Loops
// let n = Number(prompt("Enter your number"))
// for(let i =1; i<= 10; i++){
//     console.log(`${n} * ${i} = ${n *i}`)
// }


// let n2 = 5
// let str = ""
// for(let i =0; i<n2; i++){
//     str+="* "
// }
// console.log(str)


// let tart = Number(prompt("Enter start number"))
// let end = Number(prompt("Enter end number"))


// for(let i = 1; i<=100; i++){ //1 -> 2 ->3 ->....-> 100

//     for(let j = 1; j <=10; j++){ // 1 -> 10
//         console.log(`${i} * ${j} = ${j *i}`)
//     }
// }

//Qustion : Print continious array or print the subarrays

// let arr = [12, 13 , 14, 15 ,16]
// //console.log(arr.slice(1, 4))

// let s = 1
// let end = 4
// let ansArray = []

// for(let i =s; i<= e; i++){
//     ansArray.push(arr[i])
// }
// console.log(ansArray)


//print all possible subarray of the above array
// let arr = [12, 13 , 14, 15 ,16]

// for(let i =0; i< arr.length; i++){

//     let ans = []
//     for(let j = i; j<arr.length; j++){
//         ans .push(arr[j])
//         console.log(ans)

//     }
// }


//Print all substr 
// let str = "hlhgsgbsjvls"

// for(let i = 0; i< str.length; i++){

//     let ans = ""
//     for(let j =i; j < str.length; j++){
//         ans += str[j]
//         console.log(ans)
//     }
// }

//single line star printing 
// let n = 5
// let str = ""
// for(let i =1; i<=n ;i++){
//     str += "*"
// }
// console.log(str)


//square star printing 

// let n = 5
// for(let i =1; i<= n; i++){
//     let str = " "
//     for(let j = 1; j <= n; j++){
//         str += "*"
//     }
//     console.log(str)
// }

// se the difference in output 

// let n = 5
// let str = " "
// for(let i =1; i<= n; i++){
    
//     for(let j = 1; j <= n; j++){
//         str += "*"
//     }
//     console.log(str)
// }


//Rectangle printing 

// let row = 5 
// let col = 7

// for(let i =1; i <= row; i++){
//     let str = ""

//     for(let j = 1; j <= col ; j++){
//         str += "* "
//     }
//     console.log(str)
// }

//Right angled triangle

// let n = 5 
// for(let i =1; i <= n; i++){

//     let str = ""

//     for(let j = 1; j <= i; j++){
//         str += "* "
//     }
//     console.log(str)
// }

//Hollow right angled triangle 

// let n = 5
// for(let i = 1; i <= n; i++){
//     let str = ""

//     for(let j =1; j <= i; j++){
//         if(i == n || j == 1 || j == i){
//             str += "* "
//         }
//         else{
//             str += "  "
//         }
//     }
//     console.log(str)
// }


//Flipped right angled triangle

// let n = 5 
// for(let i =1; i <= n; i++){

//     let str = ""

//     for(let j = 1; j <= (n+1)-i; j++){
//         str += "* "
//     }
//     console.log(str)
// }

//Hollow square /rectangle

// let n = 5 
// for(let i =1; i<=n; i++){

//     let str = ""
//     for(let j = 1; j <= n; j++){
//         //str += "*"

//         if(i == 1 || i == n || j ==1 || j == n){
//             str += "* "
//         }
//         else{
//             str += "  "
//         }
//     }
//     console.log(str)
// }



//Flipped right angled triangle on y axis 
// let n = 5
// for(let i =1; i <= n ; i++){
//     let str = ""

//     for(let j = 1; j <= n-i; j++){
//         str += "  "
//     }

//     for(let k =1; k <= i; k++){
//         str += "* "
//     }
//     console.log(str)
// }

// Hollow - Flipped right angled triangle on y axis 

let n = 5 
for(let i =1; i <= n ; i++){
    let str = ""

    for(let j =1; j <= n-i ; j++){
        str += "  "
    }
    for(let k = 1 ; k <= i ; k++){
        if(k == i || i == n || k == 1){
            str += "* "
        }else{
            str += "  "
        }
    }
    console.log(str)
}



