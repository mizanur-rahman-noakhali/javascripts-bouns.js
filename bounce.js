var marks=[95,78,90,35,77,89]
// for(i=0; i<marks.length; i++){
//     var element=marks[i];
//     console.log(element);
// }
// function add(number1,number2){
//     var total=number1+number2;
//     return total;
// }
// var result1= add(80,90);
// console.log(result1);
// console.log("mizan");
// console.log("rony");
// var result2=add(144,568);
// console.log(result2);
function largestNumber(numbers){
    for(var i=0;i<numbers.length;i++){
        var larger=numbers[0];
        var element=numbers[i];
       // console.log(element);
       if(element>larger){
        larger=element;
       }
    }
    return larger;
}
 //var output=largestNumber([56,78,90]);
 var numbers=[56,77,88,99,35,68,76,54,89,95];
 var output=largestNumber(numbers);
 console.log("output",output);
