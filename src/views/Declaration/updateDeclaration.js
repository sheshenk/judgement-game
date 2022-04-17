import roundList from "../../data/roundList"

export const addDeclaration = (players, setPlayers, i, round) => () => {
    
    const newPlayers = [...players]
    if (newPlayers[i].declarations[round] < roundList[round]) {
        newPlayers[i].declarations[round]++
        setPlayers(newPlayers)
    }
}

export const minusDeclaration = (players, setPlayers, i, round) => () => {
    const newPlayers = [...players]
    if (newPlayers[i].declarations[round] > 0) {
        newPlayers[i].declarations[round]--
        setPlayers(newPlayers)
    }
}