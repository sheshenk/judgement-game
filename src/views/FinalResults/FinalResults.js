import { Heading, HStack } from "@chakra-ui/react"
import ContainerBox from "../../components/ContainerBox/ContainerBox"
import FinalResultsList from "./FinalResultsList"
import { finalResultsBack } from "./finalResultsNav"

const FinalResults = ({players, setPlayers, round, setRound, stage, setStage}) => {
    return (
        <ContainerBox prev={finalResultsBack(setRound, setStage)} prevDisabled={false} next={null} nextDisabled={false}>
            <HStack w='100%'>
                <Heading as={'md'} fontSize={24}>Final Results</Heading>
            </HStack>
            <FinalResultsList players={players} round={round}/>
        </ContainerBox>
    )
}
export default FinalResults