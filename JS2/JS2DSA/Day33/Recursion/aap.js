//Recursion


//print 1 to N using recursion
// function print(i, n){
//     if(i > n){
//         return
//     }
//     console.log(i)
//     print(i+1,n)
// }
// print(1,3)


//print N to 1 using recursion
function print(i, n){
    if(i > n){
        return
    }
    
    print(i+1,n)
    console.log(i)
}
print(1,3)



