var n= 5;
var k = "";

for(let i=-(n + 1);i<=n+1;i++)
{
   
    for (let j = -(n+1); j <=n+1; j++) 
    {
       
            if(j==-(n+1) || j==n+1 )
            {
                k+= "|";
            }
            else  if( i==n+1 || i==-(n+1) )
            {
                k+= "="
            }
            else if( i == 0 && j == 0){
                k+="X"
            }
            
             else if(i-j==0)
            {
               
                 k+="\\";
                
            }
            else if(Math.abs(i)-Math.abs(j)==0)
            {
                k+="/"
            }
           
            else if(i==0 || j==0)
            {
                k+="0"
            }
            else if(i>0 & j<0 && i>=j || i<0 && j<0 && i<j)
            {
                k +=Math.abs(j);
            }
            else if(i>0 && j>0 && i+j<=0){
                 k+=n+j+1
            }
            else if(i<0 && j>0 && i+j>=0){
                k+=n-Math.abs(j)+1
            }
            else if(Math.abs(i)- Math.abs(j)<=0){
                k+=String.fromCharCode(n-Math.abs(j)+98)
            }
            else{
                k+=String.fromCharCode(n-Math.abs(j)+97)
            }
    }
    k+="\n";
}
console.log(k);