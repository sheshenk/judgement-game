import roundList from "../../data/roundList"

const newPlayer = (i) => {
    return {
        id: i,
        name: '',
        declarations: Array(roundList.length).fill(0),
        redeclarations: Array(roundList.length).fill(0),
        scores: Array(roundList.length).fill(0)
    }
}

export const addEmptyPlayer = (players, setPlayers) => () => {
    const newPlayers = [...players]
    newPlayers.push(newPlayer(players.length))
    setPlayers(newPlayers)
}