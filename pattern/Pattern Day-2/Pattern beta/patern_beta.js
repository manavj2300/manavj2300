var n = 10;
var k = "";
for (var i = -n; i <=n; i++) {
    if(i==0){
        continue;
    }
    for (var j = -n; j<=n; j++) {
        if(j==0){
            continue;
        }
        if (Math.abs(i) + Math.abs(j) <= n) {
            
            k += "@";
        }
        
        else {
            k += "-";
        }

    }
 k+="\n";
}
console.log(k);