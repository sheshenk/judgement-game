import React from "react"
import RedeclarationPane from "../../components/RedeclarationPane/RedeclarationPane"
import { Button } from "@mui/material"

class Redeclaration extends React.Component {

    render() {
        return (
            <div>
            <RedeclarationPane players={this.props.players} setPlayers={this.props.setPlayers} round={this.props.round}/>
            <br/>
            <div style={{display:'flex', justifyContent:'space-between'}}>
            <Button variant="contained" onClick={() => {
                this.props.setStage(2)
            }}>Back</Button>
            <Button variant="contained" onClick={() => {
                this.props.setStage(4)
            }}>Next</Button>
            </div>
           
            </div>
            )
    }
    
}
export default Redeclaration