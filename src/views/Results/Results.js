import { Heading, HStack } from "@chakra-ui/react"
import ContainerBox from "../../components/ContainerBox/ContainerBox"
import ResultsList from "./ResultsList"
import { resultsBack, resultsNext } from "./resultsNav"

const Results = ({players, setPlayers, round, setRound, stage, setStage}) => {
    return (
        <ContainerBox prev={resultsBack(setStage)} prevDisabled={false} next={resultsNext(round, setRound, setStage)} nextDisabled={false}>
            <HStack w='100%'>
                <Heading as={'md'} fontSize={24}>Round {round + 1} Results</Heading>
            </HStack>
            <ResultsList players={players} round={round}/>
        </ContainerBox>
    )
}
export default Results