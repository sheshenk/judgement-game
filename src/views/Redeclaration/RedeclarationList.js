import { AddIcon, MinusIcon } from "@chakra-ui/icons"
import { HStack, Wrap, Text, Box, VStack, IconButton, useColorModeValue } from "@chakra-ui/react"
import { getStartingDeclarator } from "../../services/getPlayerFunctions"
import makeQueue from "../../services/makeQueue"
import { addRedeclaration, minusRedeclaration } from "./updateRedeclaration"

const RedeclarationList = ({players, setPlayers, round}) => {

    const headingTextColor = useColorModeValue('messenger.500', 'messenger.100')

    const boxMinW = 170
    const queue = makeQueue(players, getStartingDeclarator(players, round))

    const uiQueue = [...queue]
    uiQueue.push(...Array(9 - uiQueue.length).fill(null))

    const redeclarationList = uiQueue.map((player, i) => {
        
        
        if (player === null) {
            return (
                <Box flexGrow={1} minW={boxMinW} style={{marginTop:'0px', marginBottom:'0px'}}></Box>
            )
        } else {
            return (
                <Box flexGrow={1} minW={boxMinW} borderWidth='1px' borderRadius='lg' overflow='hidden' p={4}>
                    <VStack spacing={4} w='full'>
                        <Text fontSize={18} as='b' color={headingTextColor}>
                            {player.name}
                        </Text>
                        <HStack spacing={2}>
                            <IconButton icon={<MinusIcon/>} size='xs' onClick={minusRedeclaration(players, setPlayers, player.id, round)}/>
                            <Text>
                                {player.redeclarations[round]}
                            </Text>
                            <IconButton icon={<AddIcon/>} size='xs' onClick={addRedeclaration(players, setPlayers, player.id, round)}/>
                        </HStack>
                    </VStack>
                </Box>
            )
        }
    })

    return (
        <Wrap w='100%' spacing={4}>
            {redeclarationList}
        </Wrap>
    )

}

export default RedeclarationList