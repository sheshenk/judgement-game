import { Heading, HStack, Spacer, Text } from "@chakra-ui/react"
import ContainerBox from "../../components/ContainerBox/ContainerBox"
import roundList from "../../data/roundList"
import { getCurrentDealer } from "../../services/getPlayerFunctions"
import DeclarationList from "./DeclarationList"
import { declarationBack, declarationNext, declarationNextDisabled } from "./declarationNav"


const Declaration = ({players, setPlayers, round, setRound, stage, setStage}) => {

    const dealer = getCurrentDealer(players, round)

    return (
        <ContainerBox prev={declarationBack(round, setRound, setStage)} prevDisabled={false} next={declarationNext(setStage)} nextDisabled={declarationNextDisabled(players, round)}>
            <HStack w='100%'>
                <Heading as={'md'} fontSize={24}>{players[dealer].name}, deal {roundList[round]} cards</Heading>
                <Spacer/>
            </HStack>
            <Text w='full'>
            Declare your sets below. The total cannot add up to {roundList[round]}.
            </Text>
            <DeclarationList players={players} setPlayers={setPlayers} round={round}/>
        </ContainerBox>
    )
}
export default Declaration