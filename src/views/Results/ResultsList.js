import { HStack, Wrap, Text, Spacer, useColorModeValue, Box } from "@chakra-ui/react"

const ResultsList = ({players, round}) => {

    const headingTextColor = useColorModeValue('messenger.500', 'messenger.100')

    const newPlayers = [...players]
    newPlayers.sort((x, y) => y.scores[round] - x.scores[round])

    const boxMinW = 170
    const uiQueue = [...newPlayers]
    uiQueue.push(...Array(9 - uiQueue.length).fill(null))

    const sortedList = uiQueue.map((player, i) => {
        if (player === null) {
            return (
                <Box flexGrow={1} minW={boxMinW} style={{marginTop:'0px', marginBottom:'0px'}}></Box>
            )
        } else {
            return (
                <Box flexGrow={1} minW={boxMinW} borderWidth='1px' borderRadius='lg' overflow='hidden' p={4}>
                    <HStack w='full'>
                        <Text fontSize={18} as='b' color={headingTextColor}>
                            {player.name}
                        </Text>
                        <Spacer/>
                        <Text fontSize={18} as='b'>
                            +{player.scores[round]}
                        </Text>
                    </HStack>
                </Box>
            )
        }
    })
    return (
        <Wrap spacing={4} w='full'>
            {sortedList}
        </Wrap>
    )
}
export default ResultsList