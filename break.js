// for(var i=1; i <= 20; i++){
//     console.log(i);
//     if(i>10){
//         break;
//     }
// }

// var roastGiven = 0;
// while(roastGiven < 10){
//     console.log('Gift ansi, Roast den !!');
//     roastGiven++;
//     if(roastGiven > 2){
//         break;
//     }
// }

// var items = ['Mouse','Keyboard','laptop','bottle'];

// for(var i=0; i < items.length; i++){
//     var item = items[i];
//     if(item == 'laptop'){
//         break;
//     }
//     console.log(item);
// }
var numbers = [45,46,56,21,41,3,4,304,34,3,43,4,34,3,4,5];

for(var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    if(number > 100){
        break;
    }
    console.log(number);
}