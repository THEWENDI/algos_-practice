const competitions = [
    ["HTML", "Java"],
    ["Java", "Python"],
    ["Python", "HTML"],
    ["C#", "Python"],
    ["Java", "C#"],
    ["C#", "HTML"]
]
const results = [0, 1, 1, 1, 0, 1]


function tournamentWinner(competitions, results) {
    let bestteam = "";
    let score = { [bestteam]: 0 };
    for (let i = 0; i < competitions.length; i++) {
        let result = results[i];
        let [homeTeam, awayTeam] = competitions[i];
        let winningTeam = "";
        if (result === 1) {
            winningTeam = homeTeam;
        } else {
            winningTeam = awayTeam;
        }
        updateScore(winningTeam, 3, score);
        if (score[winningTeam] > score[bestteam]) {
            bestteam = winningTeam;
        }

    }
    console.log(score)
    return bestteam;
}

function updateScore(team, point, score) {
    if (!(team in score)) {
        score[team] = 0;
    }
    score[team] += point;
}


console.log(tournamentWinner(competitions, results))