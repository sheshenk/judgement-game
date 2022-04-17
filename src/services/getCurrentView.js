import roundList from "../data/roundList"
import Initialization from "../views/Initialization/Initialization"
import Declaration from "../views/Declaration/Declaration"
import PlayRound from "../views/PlayRound/PlayRound"
import Redeclaration from "../views/Redeclaration/Redeclaration"
import Results from "../views/Results/Results"
import FinalResults from "../views/FinalResults/FinalResults"

const getCurrentView = (players, setPlayers, round, setRound, stage, setStage) => {
   
    if (round === -1) {
        return <Initialization players={players} setPlayers={setPlayers} round={round} setRound={setRound} stage={stage} setStage={setStage}/>
    } else if (round === roundList.length) {
        return <FinalResults players={players} setPlayers={setPlayers} round={round} setRound={setRound} stage={stage} setStage={setStage}/>
    } else {
        const views = [
            <Declaration players={players} setPlayers={setPlayers} round={round} setRound={setRound} stage={stage} setStage={setStage}/>,
            <PlayRound players={players} setPlayers={setPlayers} round={round} setRound={setRound} stage={stage} setStage={setStage}/>,
            <Redeclaration players={players} setPlayers={setPlayers} round={round} setRound={setRound} stage={stage} setStage={setStage}/>,
            <Results players={players} setPlayers={setPlayers} round={round} setRound={setRound} stage={stage} setStage={setStage}/>,
        ]
        return views[stage]
    }
}
export default getCurrentView