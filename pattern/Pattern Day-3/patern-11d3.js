
var n = 3;
var k = "";
for (var i = 0; i <1; i++) {
    for (var j = -n; j <n; j++) {
        if (i == 0 && j == 0) {
            k += "0"
        }
        else {
            k += " ";
        }
    }

    k += "\n";
}
for(var l=0;l<=n-1; l++){
for (var i = 1; i <= n; i++) {
    for (var j = -n; j <n+1; j++) {
  
        if (i + j == 0) {
            k += "/"
        }
        else if (i - Math.abs(j) >= 1) {
            k += "-";
        }
        else if (i - Math.abs(j) ==  0) {
            k += "\\"
        }
       
        
        else {
            k += " "
        }
    }

    k += "\n";
}
}
for (var i = 0; i <=n; i++) {
    for (var j = -n; j <= n; j++) {


        if (Math.abs(j)==0 || i==n ) {
            k += "="
        }
        else if(Math.abs(j)==1){
            k+="|"
        }
        else if (i == n) {
            k += "="
        }
        else{
            k+=" "
        }
    }

    k += "\n";
}


console.log(k);