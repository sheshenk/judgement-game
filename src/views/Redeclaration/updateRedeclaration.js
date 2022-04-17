import roundList from "../../data/roundList"

export const addRedeclaration = (players, setPlayers, i, round) => () => {
    const total = players.map(pl => pl.redeclarations[round]).reduce((x,y) => x + y)
    const newPlayers = [...players]
    if (total < roundList[round]) {
        newPlayers[i].redeclarations[round]++
        setPlayers(newPlayers)
    }
}

export const minusRedeclaration = (players, setPlayers, i, round) => () => {
    const newPlayers = [...players]
    if (newPlayers[i].redeclarations[round] > 0) {
        newPlayers[i].redeclarations[round]--
        setPlayers(newPlayers)
    }
}