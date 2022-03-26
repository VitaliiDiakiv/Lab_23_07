function Nsd (a,b){
    while(a!==0 &&  b!==0) {
        if (a > b){
            a = a % b;
        } else{
            b = b % a;
        }
    }
    console.log(a + b);
}
console.log("НСД чисел 102 і 24 :");
Nsd(102,24)