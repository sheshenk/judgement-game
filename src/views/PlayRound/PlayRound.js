import React from "react"
import PlayRoundPane from "../../components/PlayRoundPane/PlayRoundPane"
import { Button } from "@mui/material"

class PlayRound extends React.Component {

    render() {
        return (
            <div>
            <PlayRoundPane players={this.props.players} round={this.props.round}/>
            <br/>
            <div style={{display:'flex', justifyContent:'space-between'}}>
            <Button variant="contained" onClick={() => {
                this.props.setStage(1)
            }}>Back</Button>
            <Button variant="contained" onClick={() => {
                this.props.setStage(3)
            }}>Next</Button>
            </div>
            </div>
            )
    }
    
}
export default PlayRound