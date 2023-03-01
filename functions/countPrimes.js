var countPrimes = function(n) {
    let arr = new Array(n+1)
    arr[0] = false;
    arr[1] = false;
    arr.fill(true,2,arr.length);

    for( let i = 2; i*i<n; i++) {
        if(arr[i]) for( let j = i*i ; j<=n; j+=i) arr[j] = false;
    }

    let count = 0;
    for(let i = 0; i<n;i++) {
        if(arr[i])  count++;
    }
    return count;
};

console.log(countPrimes(10))