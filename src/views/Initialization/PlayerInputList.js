import { Input, VStack } from "@chakra-ui/react"

const PlayerInputList = ({players, setPlayers}) => {

    const handleUpdate = (i) => {
        return (e) => {
            const newPlayers = [...players]
            newPlayers[i].name = e.target.value
            setPlayers(newPlayers)
        }
    }

    const inputList = players.map((player, i) => 
        <Input placeholder='Enter player name' onChange={handleUpdate(i)} value={player.name}/>
    )

    return (
        <VStack w='100%'>
            {inputList}
        </VStack>
        
    )
}
export default PlayerInputList