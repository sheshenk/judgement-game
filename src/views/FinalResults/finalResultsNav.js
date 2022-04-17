import roundList from "../../data/roundList"

export const finalResultsBack = (setRound, setStage) => () => {
    setRound(roundList.length - 1)
    setStage(3)
}