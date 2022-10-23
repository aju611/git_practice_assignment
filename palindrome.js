let xyz = 'NAMAN';
let sum = 0;
for(let i = 0;i<xyz.length;i++){
  if(xyz[i]==x[xyz.length-1-i]){
    sum++;
  }
}
if(sum==xyz.length){
  console.log('Yes it is Pallindrome');
} else {
  console.log('Not a palindrome');
}