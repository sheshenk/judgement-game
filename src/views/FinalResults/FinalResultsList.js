import { ArrowUpIcon } from "@chakra-ui/icons"
import { HStack, Wrap, Text, Spacer, useColorModeValue, Box, Circle } from "@chakra-ui/react"

const FinalResultsList = ({players, round}) => {

    const headingTextColor = useColorModeValue('gray.800', 'gray.100')
    const medals = ['yellow.500', 'gray.500', 'yellow.800']


    const arraySum = (arr) => {
        return arr.reduce((x, y) => x + y, 0)
    }

    const newPlayers = [...players]
    newPlayers.sort((x, y) => arraySum(y.scores) - arraySum(x.scores))

    const boxMinW = 170
    const winnerBoxMinW = 'full'
    const uiQueue = [...newPlayers]
    uiQueue.push(...Array(9 - uiQueue.length).fill(null))

    const sortedList = uiQueue.map((player, i) => {
        var medal = <></>
        if (i < 3) {
            medal = <Circle bgColor={medals[i]} color='white' size={6}><ArrowUpIcon/></Circle>
        }
        if (player === null) {
            return (
                <Box flexGrow={1} minW={i < 3 ? winnerBoxMinW : boxMinW} style={{marginTop:'0px', marginBottom:'0px'}}></Box>
            )
        } else {
            return (
                <Box flexGrow={1} minW={i < 3 ? winnerBoxMinW : boxMinW} borderWidth='1px' borderRadius='lg' overflow='hidden' p={4}>
                    <HStack w='full'>
                        {medal}
                        <Text fontSize={i < 3 ? 24 : 18} as='b' color={headingTextColor}>
                            {player.name}
                        </Text>
                        <Spacer/>
                        <Text fontSize={i < 3 ? 24 : 18} as='b'>
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