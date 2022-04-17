import roundList from "../../data/roundList"

export const redeclarationBack = (round, setRound, setStage) => () => {
    setStage(1)
}

export const redeclarationNext = (players, setPlayers, round, setStage) => () => {
    setStage(3)
    players.forEach((pl, i) => {
        if (pl.declarations[round] === pl.redeclarations[round]) {
            const dec = pl.declarations[round]
            players[i].scores[round] = 11 * dec + 10
        } else {
            players[i].scores[round] = 0
        }
    });
    console.log(players)
}

export const redeclarationNextDisabled = (players, round) => {
    const total = players.map(p => p.redeclarations[round]).reduce((x, y) => x + y, 0)
    return total !== roundList[round]
}