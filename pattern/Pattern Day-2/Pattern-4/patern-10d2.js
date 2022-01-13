var n = 5;
var k = "";
var abc=['a','b','c','d','e','f']
for (var i = -n-1; i <=n+1; i++) {
    
    for (var j =-n-1; j <=n+1; j++) {
        
        
       if(i==(n+1) || i==-n-1 || j==-n-1 || j==n+1){
            k+="0";
        } 
        else if( Math.abs(i)-Math.abs(j) >=0 )
        {   if(i<0 && j>0 || i>0 && j<0){
              var m= Math.abs(i) - Math.abs(j);
              k+=m+1
        }
            else{
            k+= abc[Math.abs(i) - Math.abs(j)];
        }
        }

        
        else{
            k+=" ";
        }

    }
    k += "\n";
}
console.log(k);