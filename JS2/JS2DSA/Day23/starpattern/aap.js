//More star pattern 
//square with diagonals star print 

// let n = 7 

// for(let row = 1; row <= n ; row++){
//     let str = ""

//     for(let col =1; col <= n; col++){

//         if(row ==1 || row == n ||col == 1|| col == n || row == col || row + col == n +1){

//             str += "* "

//         }
//         else{
//             str += "  "

//         }
//     }
//     console.log(str)
// }


// Pyramid 

// let n = 5 
// let spaces = n -1
// let stars = 1 

// for(let i = 1; i <= n ; i++){
//     let str = ""

//     for(let j = 1; j <= spaces ; j++){
//         str += "  "
//     }
//     for(let k = 1; k <= stars; k++){
//         str += "* "
//     }
//     console.log(str)
//     stars+=2
//     spaces--
// }



//Hollow pyramid 

// let n = 5 
// let spaces = n-1
// let stars = 1

// for(let i =1; i <=n ; i++){
//     let str = ""

//     for(let j = 1; j <= spaces; j++){
//         str += "  "
//     }

//     for(let k =1; k <= stars; k++) {
//         if(i == n || k == 1|| k == stars ){
//             str += "* "

//         }else{
//             str += "  "

//         }
//     }
//     console.log(str)
//     stars += 2
//     spaces--

// }

//Hollow / flipped pyramid on x axis 

// let n = 5
// let spaces = 0
// let stars = 2 *n-1

// for(let i =1; i <= n; i++){

//     let str = ""

//     for(let j = 1; j <= spaces; j++){
//         str += "  "
//     }

//     for(let k = 1; k <= stars ; k++){
//        // str += "* " // full flipped pyramid on x-axis

//        //condition for filpped  Hollow pyramid on x-axis
//        if(i ==1 ||  k == 1|| k ==stars){
//         str += "* "
//        }else{
//         str += "  "
//        }
//     }
//     console.log(str)
//     stars -= 2
//     spaces++
// }



//Hours star printing 

// let n = 11
// let spaces = 0
// let stars = n

// for(let i =1; i <= n; i++){
//     let str = ""

//     for(let j =1; j <= spaces ; j++){
//         str += "  "
//     }

//     for(let k = 1; k <= stars ; k++){
//         str += "* "
//     }
//     console.log(str)

//     // condition for  flipped pyramid in hours star printing

//     if(i < n/2){
//         stars -= 2
//         spaces++
//     }else{
//         spaces--
//         stars += 2
//     }
// }




//  Diamond Pattern

let n = 3 
let spaces = n
let stars = 1

for(let i = 1; i <= 2 * n + 1; i++){
    let str = ""


    for(let j =1; j <= spaces ; j++) {
        str += "  "

    }
    for(let k = 1; k <= stars; k++){
        str += "* "

    }
    console.log(str)
    if(i <= n ){
        stars += 2
        spaces--
    }else{
        stars -= 2
        spaces++
    }


}