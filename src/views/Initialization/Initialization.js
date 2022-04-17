import { AddIcon } from "@chakra-ui/icons"
import { Heading, HStack, IconButton, Spacer, Text } from "@chakra-ui/react"
import ContainerBox from "../../components/ContainerBox/ContainerBox"
import PlayerInputList from "./PlayerInputList"
import { initializationNext, initializationNextDisabled } from "./initializationNav"
import { addEmptyPlayer } from "./addEmptyPlayer"
const Initialization = ({players, setPlayers, round, setRound, stage, setStage}) => {
    return (
        <ContainerBox prev={null} prevDisabled={false} next={initializationNext(players, setPlayers, setRound, setStage)} nextDisabled={initializationNextDisabled(players)}>
            <HStack w='100%'>
                <Heading as={'md'} fontSize={24}>Judgement</Heading>
                <Spacer/>
                <IconButton icon={<AddIcon/>} onClick={addEmptyPlayer(players, setPlayers)}/>
            </HStack>
            <Text w='100%'>
            Judgment is a game where you have to predict the number of hands you'll make and try to make those number of hands that you predict.  It is a game usually for 3 or more players.
            </Text>
            <PlayerInputList players={players} setPlayers={setPlayers}/>
        </ContainerBox>
    )
}
export default Initialization