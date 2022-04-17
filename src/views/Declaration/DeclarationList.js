import { AddIcon, MinusIcon } from "@chakra-ui/icons"
import { HStack, Wrap, Text, Box, VStack, IconButton, useColorModeValue } from "@chakra-ui/react"
import { getStartingDeclarator } from "../../services/getPlayerFunctions"
import makeQueue from "../../services/makeQueue"
import { addDeclaration, minusDeclaration } from "./updateDeclaration"

const DeclarationList = ({players, setPlayers, round}) => {

    const boxMinW = 170
    const queue = makeQueue(players, getStartingDeclarator(players, round))

    const headingTextColor = useColorModeValue('messenger.500', 'messenger.100')

    const uiQueue = [...queue]
    uiQueue.push(...Array(9 - uiQueue.length).fill(null))

    const declarationList = uiQueue.map((player, i) => {
        
        
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
                            <IconButton icon={<MinusIcon/>} size='xs' onClick={minusDeclaration(players, setPlayers, player.id, round)}/>
                            <Text>
                                {player.declarations[round]}
                            </Text>
                            <IconButton icon={<AddIcon/>} size='xs' onClick={addDeclaration(players, setPlayers, player.id, round)}/>
                        </HStack>
                    </VStack>
                </Box>
            )
        }
    })

    return (
        <Wrap w='100%' spacing={4}>
            {declarationList}
        </Wrap>
    )

}

export default DeclarationList