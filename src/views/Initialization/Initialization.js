import { Button } from "@mui/material"
import React from "react"
import PlayerInitPane from "../../components/PlayerInitPane/PlayerInitPane"
import resetDeclarations from "../../services/resetDeclarations"

class Initialization extends React.Component {
    
    render() {
        return (
            <div>
            <PlayerInitPane players={this.props.players} setPlayers={this.props.setPlayers}/>
            <br/>
            <Button variant="contained" onClick={() => {
                resetDeclarations(this.props.players, this.props.setPlayers)
                this.props.setRound(0)
                this.props.setStage(1)
            }}>Start Game</Button>
            </div>
            )
        }
    }
    export default Initialization