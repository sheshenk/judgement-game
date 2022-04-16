import Declaration from "../views/Declaration/Declaration";
import Initialization from "../views/Initialization/Initialization";
import PlayRound from "../views/PlayRound/PlayRound";
import Redeclaration from "../views/Redeclaration/Redeclaration";
import Results from "../views/Results/Results";

const getCurrentScreen = (stage, setStage, round, setRound, players, setPlayers) => {
    if (round === -1) {
        return <Initialization stage={stage} setStage={setStage} round={round} setRound={setRound} players={players} setPlayers={setPlayers}/>;
    }
    switch (stage) {
        case 1:
            return <Declaration stage={stage} setStage={setStage} round={round} setRound={setRound} players={players} setPlayers={setPlayers}/>
        case 2:
            return <PlayRound stage={stage} setStage={setStage} round={round} setRound={setRound} players={players} setPlayers={setPlayers}/>
        case 3:
            return <Redeclaration stage={stage} setStage={setStage} round={round} setRound={setRound} players={players} setPlayers={setPlayers}/>
        case 4:
            return <Results stage={stage} setStage={setStage} round={round} setRound={setRound} players={players} setPlayers={setPlayers}/>
        default:
            return <div>Error</div>
    }
}

export default getCurrentScreen