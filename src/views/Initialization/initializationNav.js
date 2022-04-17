export const initializationNext = (players, setPlayers, setRound, setStage) => () => {
    const newPlayers = players.filter(p => p.name !== '')
    setPlayers(newPlayers)
    setRound(0)
    setStage(0)
}

export const initializationNextDisabled = (players) => {
    const newPlayers = players.filter(p => p.name !== '')
    return newPlayers.length < 3
}