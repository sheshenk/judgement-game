const resetDeclarations = (players, setPlayers) => {
    const newPlayers = [...players]
    newPlayers.forEach(p => {
        p.declaration = 0
        p.obtained = 0
    })
    setPlayers(newPlayers)
}
export default resetDeclarations