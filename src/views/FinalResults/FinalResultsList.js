import { HStack, Wrap, Text, Spacer, useColorModeValue, Box } from "@chakra-ui/react"

const FinalResultsList = ({players, round}) => {

    const bgColors = Array(players.length).fill(useColorModeValue('white', 'gray.800'))
    bgColors[0] = useColorModeValue('gold', 'yellow.500')
    bgColors[1] = useColorModeValue('gray.300', 'gray.600')
    bgColors[2] = useColorModeValue('yellow.600', 'yellow.800')

    const headingTextColor = useColorModeValue('gray.800', 'gray.100')



    const arraySum = (arr) => {
        return arr.reduce((x, y) => x + y, 0)
    }

    const newPlayers = [...players]
    newPlayers.sort((x, y) => arraySum(y.scores) - arraySum(x.scores))

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
                <Box flexGrow={1} minW={boxMinW} borderWidth='1px' borderRadius='lg' overflow='hidden' p={4} bgColor={bgColors[i]}>
                    <HStack w='full'>
                        <Text fontSize={18} as='b' color={headingTextColor}>
                            {player.name}
                        </Text>
                        <Spacer/>
                        <Text fontSize={18} as='b'>
                            {arraySum(player.scores)}
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
export default FinalResultsList