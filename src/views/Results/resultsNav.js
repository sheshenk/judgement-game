export const resultsBack = (setStage) => () => {
    setStage(2)
}

export const resultsNext = (round, setRound, setStage) => () => {
    setRound(round + 1)
    setStage(0)
}