
// function d6() {
//     var roll = Math.random();
//         roll = Math.floor(Math.random()*(6-1+1))+1;
//     return roll;
// }
    
// var playerRoll = d6();
// console.log("The player rolled: " + playerRoll);


// function getRndInteger(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) ) + min;
// }

// function d6() {
//     var roll = Math.random();
//         roll = Math.random()*(6-1+1)+1;
//         roll = Math.floor(Math.random()*(6-1+1)+1)
//     return roll;
// }
    
// var playerRoll = d6();
// console.log("The player rolled: " + playerRoll);

function random(){
    var lifesAnswers = [
        "It is certain.",
        "It is decidedly so.",
        "Without a doubt.",
        "Yes – definitely.",
        "You may rely on it.",
        "As I see it, yes.",
        "Most likely.",
        "Outlook good.",
        "Yes.",
        "Signs point to yes.",
        "Reply hazy, try again.",
        "Ask again later.",
        "Better not tell you now.",
        "Cannot predict now.",
        "Concentrate and ask again.",
        "Don't count on it.",
        "My reply is no.",
        "My sources say no.",
        "Outlook not so good.",
        "Very doubtful."
    ];
    var roll = Math.floor(Math.random()*(lifesAnswers.length - 0 + 1));
        return lifesAnswers[roll];
    }
    console.log(random())