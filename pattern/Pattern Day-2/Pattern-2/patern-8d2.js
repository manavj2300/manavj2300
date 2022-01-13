var n = 5;
var k = "";
for (var i = -n; i <=n; i++) {
    if(i==0){
        continue
    }
    for (var j =-n; j <=n; j++) {
        if(j==0){
            continue
        }
        if( i<0 && j<0 && Math.abs(i+j) <=n+1 || i>=0 && j>=0  &&  Math.abs(i+j) <=n+1 )
        {

            k+="*";
        }
        
        else{
            k+="-";
        }

    }
    k += "\n";
}
console.log(k);