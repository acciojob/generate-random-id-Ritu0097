function makeid(l) {
    var res = "";
    var rand = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < l; i++) {
        res += rand.charAt(
            Math.floor(
                Math.random() * rand.length
            )
        );
    }
    return res;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
