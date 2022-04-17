import { HStack, Wrap, Text, Box, VStack, useColorModeValue } from "@chakra-ui/react"
import { getTopDeclarator } from "../../services/getPlayerFunctions"
import makeQueue from "../../services/makeQueue"

const PlayRoundList = ({players, round}) => {

    const boxMinW = 170
    const queue = makeQueue(players, getTopDeclarator(players, round))

    const uiQueue = [...queue]
    uiQueue.push(...Array(9 - uiQueue.length).fill(null))

    const headingTextColor = useColorModeValue('messenger.500', 'messenger.100')

    const playRoundList = uiQueue.map((player, i) => {
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
                            <Text>
                                {player.declarations[round]}
                            </Text>
                        </HStack>
                    </VStack>
                </Box>
            )
        }
    })

    return (
        <Wrap w='100%' spacing={4}>
            {playRoundList}
        </Wrap>
    )

}

export default PlayRoundList