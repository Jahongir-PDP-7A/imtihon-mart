// --------------------------------------------4-vazifa----------------------------------------------
// function sredniy(a, b, c) {
//     if ((a <= b && a >= c) || (a >= b && a <= c)) {
//         return a;
//     }
//     else if ((b >= c && b <= a) || (b >= a && b <= c)) {
//         return b;
//     }
//     else {
//         return c;
//     }
// }
// console.log(sredniy(2, 3, 4));

// --------------------------------------------2-vazifa----------------------------------------------
// let array = [3, -9, -2, 1];
// function countString(arr) {
//     manfiy = 0;
//     musbat = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             musbat++;
//         }
//         if (arr[i] < 0) {
//             manfiy++;
//         }
//     }
//     return musbat + "ta musbat " + "va " + manfiy + "manfiy";
// }
// console.log(countString(array));
// --------------------------------------------3-vazifa----------------------------------------------

// let array = [3, -9, -2, 1];
// function countString(arr) {
//     let yigindi = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < 0) {
//             yigindi = yigindi + arr[i];
//         }
//     }
//     return yigindi;
// }
// console.log(countString(array));
// --------------------------------------------4-vazifa----------------------------------------------
let array = [1, 2, 3, 4, 5];
function countString(arr) {
    let katta = arr[i = 0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > katta) {
            katta = arr[i];
        }
    }
    return katta;
}

console.log(countString(array)); 
