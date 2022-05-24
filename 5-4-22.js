const coins = [5, 7, 1, 1, 2, 3, 22]

function nonConstructibleChange(coins) {
    coins.sort((a, b) => a - b);
    let change = 0;
    for (let coin of coins) {
        if (coin > (change + 1)) {
            return change + 1
        }
        change += coin;
        console.log(change);
    }
    return change + 1
}

// console.log(nonConstructibleChange(coins));


//

