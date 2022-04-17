import roundList from "../../data/roundList"

export const declarationBack = (round, setRound, setStage) => () => {
    setRound(round - 1)
    setStage(3)
}

export const declarationNext = (setStage) => () => {
    setStage(1)
}

export const declarationNextDisabled = (players, round) => {
    const total = players.map(p => p.declarations[round]).reduce((x, y) => x + y, 0)
    return total === roundList[round]
}