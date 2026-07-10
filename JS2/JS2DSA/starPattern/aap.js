//single line star pattern 

// let n = 5
// let str =""
// for(let i =1; i <=n; i++){
//   str += "*"
// }
// console.log(str)


//2. square star printing 
// let n = 5
// for(let i =1; i <= n ; i++){
  
//   let str = ""
//   for(let j =1; j <= n; j++){
//     str += " *"
//   }
//   console.log(str)
  
// }

//3. Rectangle star printing 
// let  row = 5
// let col = 7
// for(let i = 1; i <= row; i++){
  
//   let str = ""
//   for(let j =1; j <= col; j++){
//     str += " *"
//   }
//   console.log(str)
// }


//4. Right angle triangle
// let n = 5 
// for(let i =1; i <= n ; i++){
//   let str = ""
//   for(let j = 1; j <= i; j++){
//     str += " *"
//   }
//   console.log(str)
// }






//5.Flipped Right Angle Triangle (Right Side)

// function pattern(n){
//     for(let i =1; i <= n; i++){
//         let str = ""
//         for(let j = 1; j <= n-i; j++){
//             str += "  "
//         }

//         for(let k =1; k <= i; k++){
//             str += "* "
//         }
//         console.log(str)
//     }

// }
// pattern(5)


//6. 
// let n = 5 
// for(let i =1; i<= n; i++){
//     let str = ""
//     for(let j =1; j <= (n+1)-i; j++){
//         str += "* "
//     }
//     console.log(str)
// }

//7.
// let n = 7
// for(let i = n; i >= 1; i--){
//     let str = ""

//     //add spaces 
//     for(let j = 1; j <= n-i; j++){
//         str += "  "

//     }
//     for(let k =1; k <= i; k++){
//         str += "* "
//     }
//     console.log(str)

// }

//Hollow rectangle 
// let n = 5 
// for(let i =1; i <=n; i++){
//     let str = ""
//     for(let j =1; j <= n ; j++){
//         if(i ==1 || i == n || j ==1|| j == n){
//             str += "* "
//         }
//         else{
//             str += "  "
//         }
//     }
//     console.log(str)
// }


//
// let n = 7
// for(let i =1; i <= n  ; i++){
//     let str = ""
//     for(let j =1; j <= i; j++){

//         //star print 
//         if(i == n || j ==1 || j == i){
//             str += "* "
//         }
//         else{
//             str += "  "
//         }
//     }
//     console.log(str)
// }

//
// let n = 7
// for(let i =1; i <= n ; i++){
//     let str = ""
//     for(let j =1; j <= n-i; j++){
//         str += "  "
//     }
//     for(let k =1; k <= i; k++){
//         if(k ==i || k == 1 || i == n ){
//             str += "* "
//         }
//         else{
//             str += "  "
//         }
//     }
//     console.log(str)
// }

// let n = 7 
// for(let i =1; i <= n; i++){
//     let str = ""
//     for(let j =1; j <= n; j++){

//         if(i ==1 || j == 1 || j==n-i+1){
//             str += "* "
//         }
//         else{
//             str += "  "
//         }
//     }
//     console.log(str)
// }


// Inverted Mirrored Hollow Right Angled Triangle

// function pattern(n) {
//     for (let i = n; i >= 1; i--) {
//         let str = "";

//         // left spaces
//         for (let j = 1; j <= n - i; j++) {
//             str += "  ";
//         }

//         // hollow stars
//         for (let k = 1; k <= i; k++) {
//             if (i === n || i === 1 || k === 1 || k === i) {
//                 str += "* ";
//             } else {
//                 str += "  ";
//             }
//         }

//         console.log(str);
//     }
// }

// pattern(5);

//Pyramid pattern 
// let n = 5
// let spaces = n-1
// let star = 1
// for(let i =1; i <= n ; i++){

//     let str = ""
//     for(let j =1; j <= spaces; j++){
//         str += "  "
//     }
//     for(let k =1; k <= star; k++){
//         str += "* "
//     }
//     console.log(str)
//     star += 2
//     spaces--
// }


// inverted pyramid 
// let n = 7
// let spaces = 0
// let star = 2*n-1
// for(let i =1; i <= n; i++){
//     let str = ""
//     for(let j =1; j <= spaces; j++){
//         str += "  "
//     }
//     for(let k =1; k <= star; k++){
//         str += "* "
//     }
//     console.log(str)
//     star -= 2
//     spaces++
// }

//Hollow pyramid 
// Hollow Pyramid Pattern

// function pattern(n) {
//     for (let i = 1; i <= n; i++) {
//         let str = "";

//         // left spaces
//         for (let j = 1; j <= n - i; j++) {
//             str += " ";
//         }

//         // stars / hollow part
//         for (let k = 1; k <= (2 * i - 1); k++) {
//             if (i === n || k === 1 || k === (2 * i - 1)) {
//                 str += "*";
//             } else {
//                 str += " ";
//             }
//         }

//         console.log(str);
//     }
// }

// pattern(5);




//Hollow inverted half pyramid 
// let n = 7
// let spaces = 0
// let star = 2*n-1
// for(let i =1; i <= n; i++){
//     let str = ""
//     for(let j =1; j <= spaces; j++){
//         str += "  "
//     }
//     for(let k =1; k <= star; k++){
//         //str += "* "
//         if(i ==1 || k ==1 || k == star){
//             str += "* "
//         }
//         else{
//             str += "  "
//         }
//     }
//     console.log(str)
//     star -= 2
//     spaces++
// }

// function Diamond(n){
//     //upper pyramid 
//     let spaces = n-1
//     let star = 1

//     for(let i =1; i <= n; i++){
//        let str = ""
//         for(let j =1; j <= spaces; j++){
//             str += "  "
//         }
//         for(let k = 1; k <= star; k++){
//             str += "*"
//         }
//         console.log(str)
//         star += 2
//         spaces--

//     }

//     //lower inverted pyramid 
//     let spacess = 0
//     let starrr = 2*n-3
//     for(let i =1; i <=n ;i++){
//         let str = ""

//         for(let j =1; j <= spacess; j++){
//             str += "  "
//         }
//         for(let k = 1; k <= starrr; k++){
//             str += "*"
//         }
//         console.log(str)
//         starrr -= 2
//         spacess++
//     }
// }
// Diamond(5)



// function Diamond(n) {
//     // upper pyramid
//     let spaces = n - 1;
//     let star = 1;

//     for (let i = 1; i <= n; i++) {
//         let str = "";

//         for (let j = 1; j <= spaces; j++) {
//             str += " ";
//         }

//         for (let k = 1; k <= star; k++) {
//             str += "*";
//         }

//         console.log(str);

//         star += 2;
//         spaces--;
//     }

//     // lower inverted pyramid
//     let spacess = 1;
//     let starrr = 2 * n - 3;

//     for (let i = 1; i < n; i++) {
//         let str = "";

//         for (let j = 1; j <= spacess; j++) {
//             str += " ";
//         }

//         for (let k = 1; k <= starrr; k++) {
//             str += "*";
//         }

//         console.log(str);

//         starrr -= 2;
//         spacess++;
//     }
// }

// Diamond(5);


//hour star pattern code
// function hour(n){

//     // lower inverted pyramid
//     let spacess = 1;
//     let starrr = 2 * n - 3;

//     for (let i = 1; i < n; i++) {
//         let str = "";

//         for (let j = 1; j <= spacess; j++) {
//             str += " ";
//         }

//         for (let k = 1; k <= starrr; k++) {
//             str += "*";
//         }

//         console.log(str);

//         starrr -= 2;
//         spacess++;
//     }


//     //upper pyramid
//     let spaces = n - 1;
//     let star = 1;

//     for (let i = 1; i <= n; i++) {
//         let str = "";

//         for (let j = 1; j <= spaces; j++) {
//             str += " ";
//         }

//         for (let k = 1; k <= star; k++) {
//             str += "*";
//         }

//         console.log(str);

//         star += 2;
//         spaces--;
//     }


// }
// hour(5)


// Count frequency of each element in array
// let arr = [1, 2, 2, 3, 1, 4];

// for (let i = 0; i < arr.length; i++) {
//     let count = 1;
//     let visited = false;

//     // Check if element already counted before index i
//     for (let j = 0; j < i; j++) {
//         if (arr[i] == arr[j]) {
//             visited = true;
//             break;
//         }
//     }

//     // If not visited, count frequency
//     if (!visited) {
//         for (let k = i + 1; k < arr.length; k++) {
//             if (arr[i] == arr[k]) {
//                 count++;
//             }
//         }

//         console.log(arr[i] + " => " + count);
//     }
// }



// Remove duplicate elements from array
let arr = [1, 2, 2, 3, 4, 4, 5];
let res = [];

for (let i = 0; i < arr.length; i++) {
    let found = false;

    for (let j = 0; j < res.length; j++) {
        if (arr[i] == res[j]) {   // fix here
            found = true;
            break;
        }
    }

    if (!found) {
        res[res.length] = arr[i];
    }
}

console.log(res);