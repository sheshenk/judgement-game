const makeQueue = (players, startIndex) => {
    const end = players.slice(startIndex)
    const start = players.slice(0, startIndex)
    end.push(...start)
    return end
}
export default makeQueue