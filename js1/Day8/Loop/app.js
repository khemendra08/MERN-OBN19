//Day 8 

// let start = 1

// while(start <= 10){

//     if(start ==5){
//         start++
//         continue
//     }
//     console.log(start)
//     start++
// }

//Loops
// let i = 100
// do{
//     console.log(i)
//     i++
// }
// while(i <=10)

//for- loop
// for(let i =0; i <=10; i++){
//     console.log(i)
// }


//2.
// let i =1
// for(;i <=10;){
//     console.log(i)
//     i++
// }

//3. Reverse loop
// for(let i = 100; i >=1; i--){
//     console.log(i)
// }


// for(let i =1; i<=10; i++){
//     if(i == 8) continue
//     console.log(i)
// }

//same code with while loop 
// let start = 1
// while(start <= 10){
//     if(start == 8) continue

// }
// console.log(start)
// start++


//Sum of n natural number 
// let n =99
// let sum =0
// for(let i =0; i<=n; i++){
//     sum += i
// }
// console.log(sum)

//Question: Sum of even number till n
// let n = 99
// let sum = 0

// for(let i = 2; i<=n; i+=2){
//     sum += i
// }

// for(let i = 1; i<-n; i++){
//     if(i%2 == 0){
//         sum += i
//     }
// }
// console.log(sum)


//Question: Sum of n natural number without using any loop
// let n = 99
// let sum = n *(n+1)/2
// console.log(sum)

//Question: you have give n you have to print  the reverse counting from n to 1
let n = 1000
for(let i = n; i>0; i--){
    console.log(i)
}