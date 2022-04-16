import React from "react"
import ResultsPane from "../../components/ResultsPane/ResultsPane"
import { Button } from "@mui/material"
import resetDeclarations from "../../services/resetDeclarations"

class Results extends React.Component {

    render() {
        return (
            <div>
            <ResultsPane players={this.props.players} round={this.props.round}/>
            <br/>
            <div style={{display:'flex', justifyContent:'space-between'}}>
            <Button variant="contained" onClick={() => {
                this.props.setStage(3)
            }}>Back</Button>
            <Button variant="contained" onClick={() => {
                resetDeclarations(this.props.players, this.props.setPlayers)
                this.props.setRound(this.props.round + 1)
                this.props.setStage(1)
            }}>Next</Button>
            </div>
            </div>
            )
    }
    
}
export default Results