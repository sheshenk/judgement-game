import { Heading, HStack, Spacer, Text } from "@chakra-ui/react"
import ContainerBox from "../../components/ContainerBox/ContainerBox"
import roundList from "../../data/roundList"
import RedeclarationList from "./RedeclarationList"
import { redeclarationBack, redeclarationNext, redeclarationNextDisabled } from "./redeclarationNav"


const Redeclaration = ({players, setPlayers, round, setRound, stage, setStage}) => {

    console.log(players)

    return (
        <ContainerBox prev={redeclarationBack(round, setRound, setStage)} prevDisabled={false} next={redeclarationNext(players, setPlayers, round, setStage)} nextDisabled={redeclarationNextDisabled(players, round)}>
            <HStack w='100%'>
                <Heading as={'md'} fontSize={24}>How many sets did you make?</Heading>
                <Spacer/>
            </HStack>
            <Text w='full'>
            Total must add up to {roundList[round]} {roundList[round] === 1 ? 'card' : 'cards'}
            </Text>
            <RedeclarationList players={players} setPlayers={setPlayers} round={round}/>
        </ContainerBox>
    )
}
export default Redeclaration