// var n1 = 20;
// var n2 = 20.666;
// var sum = n1 + n2;
// console.log(sum.toFixed(1));

// var n1 = 29;
// var n2 = 23;
// if (n1 == 29 && n2 == 23) {
//   console.log("mile gese !!!!!!!!!");
// }

// var n ="20";
// if(n == "20"){
//     if(typeof n == 'string'){
//         console.log('number is string');
//     }else{
//         console.log("number is not string");
//     }
// }else{
//     console.log("kisui na");
// }

// var n = 2005;
// if(n %2 !=0){
//     console.log("Odd number")
// }else{
//     console.log('Even number');
// }

// var result = 40;

// if (result > 100) {
//   console.log("Result kmne 100 thke beshi hoy");
// } else if ((result) => 0 && result <= 100) {
//   if (result >= 0 && result < 33) {
//     console.log("F");
//   }else if(result >= 33 && result <50){
//     console.log('D');
//   }else if(result >=50 && result <60){
//     console.log('C');
//   } else if(result >= 60 && result < 70){
//     console.log('B');
//   }
//   else if(result >= 70 && result < 80){
//     console.log('A');
//   }else if(result >= 80 && result <= 100){
//     console.log('A+');
//   }
//  else {
//   console.log("vai result ki 0 thke kom paisen");
// }
// }

// var numbers = ["pieash", "ahmed", "rana", "sahem"];
// console.log(numbers[1]);
// numbers.push('salman');
// console.log(numbers);

// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var temp = [];

// for (var i = 0; i < numbers.length; i++) {
//   var element = numbers[i];
//   if (element % 2 == 0) {
//     temp.push(element);
//   }
// }
// console.log(temp);

// var numbers = [1,2,3,4,5,6,7,8,9];
// temp = [];
// for(var i=0;i<numbers.length;i++){
//     var element = numbers[i];
//     if(element%2 !=0){
//         temp.push(element);
//     }
// }
// console.log(temp);

// var numbers = [20,19,18,17,16,15,14,13,12,11,9,10,8,7,6,5,4,3,2,1];
// console.log(numbers.sort());

// ##leap year
// var year = 1700;

// if (year % 400 == 0 && year % 100 == 0 && year % 4 == 0) {
//   console.log(year + " is leap year");
// } else {
//   console.log(year + " is not leap year");
// }

// var temp = [];
// for (var i = 1; i <= 50; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     temp.push(i);
//   }
// }
// console.log(temp);
// var nameLength = [];
// var friends = ["rahim", "karim", "abdul", "saddfgfdgdf", ""];
// for (var i = 0; i < friends.length; i++) {
//   var element = friends[i];
//   var length = element.length;
//   nameLength.push(length);
// }
// console.log(nameLength);
// console.log(Math.max(...nameLength));


// var numbers = [1, 3232, 3, 3, 4, 4, 5, 6, 7, 8, 9, 101];

// console.log(Math.max(...numbers));
var numbers = [1, 3232, 3, 3, 4, 4, 5, 6, 7, 8, 9, 101];
console.log(...new Set(numbers));