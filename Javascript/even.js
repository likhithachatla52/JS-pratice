function isprime(num){
    if(num<=1) return false;
    for(let i=2;i<num;i++){
        if(num%i===0) return false;
    }
    return true;
}

let range=100;
for(let i=2;i<=range;i++){
    if(isprime(i)){
        console.log(i);
    }
}