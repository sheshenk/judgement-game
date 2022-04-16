import React from "react"
import ResultsPane from "../../components/ResultsPane/ResultsPane"
import { Button } from "@mui/material"
import resetDeclarations from "../../services/resetDeclarations"
import FinalResultsPane from "../../components/FinalResultsPane/FinalResultsPane"

class FinalResults extends React.Component {

    render() {
        return (
            <div>
            <FinalResultsPane players={this.props.players} round={this.props.round}/>
            <br/>
            <div style={{display:'flex', justifyContent:'space-between'}}>
            <Button variant="contained" onClick={() => {
                this.props.setRound(this.props.round - 1)
                this.props.setStage(4)
            }}>Back</Button>
            </div>
            </div>
            )
    }
    
}
export default FinalResults