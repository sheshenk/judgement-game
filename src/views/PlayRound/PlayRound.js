import { Heading, HStack, Spacer, Text } from "@chakra-ui/react"
import ContainerBox from "../../components/ContainerBox/ContainerBox"
import roundList from "../../data/roundList"
import { getTopDeclarator } from "../../services/getPlayerFunctions"
import PlayRoundList from "./PlayRoundList"
import { playRoundBack, playRoundNext } from "./playRoundNav"


const PlayRound = ({players, setPlayers, round, setRound, stage, setStage}) => {

    const topDeclarator = getTopDeclarator(players, round)

    return (
        <ContainerBox prev={playRoundBack(setStage)} prevDisabled={false} next={playRoundNext(setStage)} nextDisabled={false}>
            <HStack w='100%'>
                <Heading as={'md'} fontSize={24}>{players[topDeclarator].name}, start the round</Heading>
                <Spacer/>
            </HStack>
            <Text w='full'>
                Currently playing round {round + 1} with {roundList[round]} {roundList[round] === 1 ? 'card' : 'cards'}.
            </Text>
            <PlayRoundList players={players} round={round}/>
        </ContainerBox>
    )
}
export default PlayRound