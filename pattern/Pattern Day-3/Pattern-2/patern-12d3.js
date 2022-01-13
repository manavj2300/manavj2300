var n= 7;
var k = "";

for(let i=-(n + 1);i<=n+1;i++)
{
   
    for (let j = -(n+1); j <=n+1; j++) 
    {
       
            if(j==-(n+1) || j==n+1 || i == 0 && j == 0)
            {
                k+= "O";
            }
            else  if( i==n+1 || i==-(n+1) )
            {
                k+= 0;
            }
            
             else if(i>0 && j>0 && i>=j || i<0 && j<0 && i<=j)
            {
               
                 k+=Math.abs(j);
                
            }
            else if(i>0 && j<0 && i+j<=0)
            {
                k+=n+j+1
            }
           
            else if(i<0 && j>0 && i+j>=0)
            {
                k+=n-Math.abs(j)+1
            }
            else
            {
                k += " ";
            }
            
    }
    k+="\n";
}
console.log(k);