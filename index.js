// part1
function calculateSum(arr) {
    let total=0
    for(let i=0;i<arr.length;i++){
      total=total+arr[i]   
    }
    console.log(total);
}
const numbers=[21,32,24,77,54]
calculateSum(numbers)
// part2
let counter=0
while(counter <5){
    counter++
    console.log('counter',counter);
}
// part3
let countDown =5
do {
    
    console.log("counrDown",countDown);
   countDown--
 
} while (countDown>0){
   
    
}
// part4
function evaluateGrade(grad) {
    if(grad >=60){
        return console.log('Pass');
    }
    else{
        return  console.log('fail')
    }
}
evaluateGrade(70)