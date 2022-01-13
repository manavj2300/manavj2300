var n = 5;
var k = "";


// for (var i = 0; i < n+1 ; i++) {
//   for (var j = n; j > i; j--) {
//     k += " ";
//   }
//   for (var l = 1; l < i; l++) {
//     k += l;
//   }
//   for (var m = i; m > 0; m--) {
//     k += m;
//   }
//   k += "\n";
 
// }


for(var i=0;i<n;i++)
{
  for(var j=-n;j<n ; j++){
    if(Math.abs(i)- Math.abs(j)>=0)
    {
      k+= Math.abs(i)-Math.abs(j) + 1;
    }
    else{
      k+=" "
    }
  }
  k+="\n";
}
console.log(k);