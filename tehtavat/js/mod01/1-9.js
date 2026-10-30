const number = parseInt("Syötä numero");
let isPrime = true;
for (let i = 2; number/2; i++) {
    if (number % i == 0) {
        isPrime = false
        break
    }
}
if (isPrime == true) {
            document.querySelector("#target").innerHTML =
            number + " on alkuluku.";
}
else {
            document.querySelector("#target").innerHTML =
            number + " ei ole alkuluku.";
}