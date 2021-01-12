function gcd(a, b) {
    let n = 0;
    a > b ? n = b : n = a;
    let gcd = 0;
    for (let i = 1; i <= n; i++) {
        if (a % i == 0 && b % i == 0) {
            gcd = i;
        }
    }
    console.log(gcd);
}

gcd(15, 5);
gcd(2154, 458);