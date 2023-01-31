var numbers = [45,46,56,21,41,3,4,304,34,3,43,4,34,3,4,5];

for(var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    if(number > 50){
        continue;
    }
    console.log(number);
}