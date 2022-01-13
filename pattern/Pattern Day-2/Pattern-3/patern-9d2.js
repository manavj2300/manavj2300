var n=10;
var k="";
for(var i=0;i<n;i++){
    for(var j=0;j<n;j++){
        if(i==((n-1)/2) && j==((n-1)/2) )
        {

            k+="0"
        }
    

        else if(i==j ){
            k+="\\"
        }
        else if(i+j==n-1){
            k+="/"
        }

        
        else if(i+j==i || i+j>=n && j==(n-1)){
            k+="|"
        }
        
        else if(i+j==j || i+j>=n && i==(n-1)){
            k+="-";
        }
        else{
            k+=" ";
        }
    }
    k+="\n";
}
console.log(k);