let num = 10;
var isPrimeNumber = true;

for (let i=2; i<num; i++){
if (num % i === 0) {
  isPrimeNumber=false;
  
}
  
}
if (isPrimeNumber===true){
  console.log('is a Prime number');
}else{
  console.log('is a not Prime number');
}