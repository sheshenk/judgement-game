import { useState } from "react";
import getCurrentScreen from "./services/getCurrentScreen";

function App() {
  
  const [players, setPlayers] = useState([])
  const [round, setRound] = useState(-1)
  const [stage, setStage] = useState(1)

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100vw',
      height: '100vh'
  }}>
    {getCurrentScreen(stage, setStage, round, setRound, players, setPlayers)}
    </div>
    )

}

export default App