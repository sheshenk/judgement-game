import makeQueue from "./makeQueue"

export const getCurrentDealer = (players, round) => {
    return round % players.length
}

export const getStartingDeclarator = (players, round) => {
    const dealer = getCurrentDealer(players, round)
    return dealer + 1 === players.length ? 0 : dealer + 1
}

export const getTopDeclarator = (players, round) => {
    const orderedPlayers = makeQueue(players, getStartingDeclarator(players, round))
    
    const declarations = orderedPlayers.map(p => p.declarations[round])
    const maxIndex = declarations.indexOf(Math.max(...declarations))
    console.log(maxIndex)
    return orderedPlayers[maxIndex].id
}