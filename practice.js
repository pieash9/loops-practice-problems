// var myBudget = 30000;

// if(myBudget > 80000){
//     console.log('I will buy mac');
// }
// else if(myBudget > 60000){
//     console.log('I will buy gaming laptop');
// }
// else if(myBudget > 40000){
//     console.log('i will buy lenovo yoga');
// }
// else if(myBudget >20000){
//     console.log('i will buy old laptop');
// }
// else{
//     console.log('I will use my phone only');
// }

// for(var i = 58; i <= 98; i++){
//     console.log(i);
// }
// var i = 581;
// while(i <= 623){
//     console.log(i);
//     i +=2;

// }

// var PH__Arrays = ["HTML", "CSS", "Bootstrap", "Tailwind", "Javascript"];
// for (var i=0; i < PH__Arrays.length; i++) {
//   console.log(PH__Arrays[i]);
// }

// var letter = ['a','b','c','d','e'];
// for(var i=0; i <= letter.length; i++){
//     console.log(letter[i]);
// }

// var mobiles = ['Nokia','iPhone','Symphony','Samsung'];
// var i = 0;
// while(i <mobiles.length){
//     console.log(mobiles[i]);
//     i++;
// }


// for(var i = 30; i <= 86; i++){
//     if(i > 44){
//         break;
//     }
//     console.log(i);
// }

// var BooksPrice = [100,230,222,130,140,223,110,500,169];

// for(var i=0; i < BooksPrice.length; i++){
//     var BookPrice = BooksPrice[i];
//     if(BookPrice > 200){
//         continue;
//     }
//     console.log(BookPrice);
// }
// var numbers = [45,46,56,21,41,3,4,304,34,3,43,4,34,3,4,5];

// for(var i = 0; i < numbers.length; i++){
//     var number = numbers[i];
//     if(number > 50){
//         continue;
//     }
//     console.log(number);
// }

var BooksPrice = [100,230,222,130,140,223,110,500,169];

var i = 0;
while(i < BooksPrice.length){
    
    var BookPrice = BooksPrice[i];
    i++;
    if(BookPrice > 200){
        continue;
    }
    console.log(BookPrice);
    
}