var n=5;
var k="";
for(var i=0;i<n;i++){
    for(var j=0;j<n;j++){
        if(i==j || i+j==n-1)
        {

            k+="#";
        }
        else{
            k+="*";
        }
    }
    k+="\n";
}
console.log(k);