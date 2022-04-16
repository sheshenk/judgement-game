import { Button } from "@mui/material"
import React from "react"
import DeclarationPane from "../../components/DeclarationPane/DeclarationPane"

class Declaration extends React.Component {

    render() {
        return (
            <div>
            <DeclarationPane players={this.props.players} setPlayers={this.props.setPlayers} round={this.props.round}/>
            <br/>
            <div style={{display:'flex', justifyContent:'space-between'}}>
            <Button variant="contained" onClick={() => {
                this.props.setRound(this.props.round - 1)
                this.props.setStage(4)
            }}>Back</Button>
            <Button variant="contained" onClick={() => {
                this.props.setStage(2)
            }}>Next</Button>
            </div>
           
            </div>
            )
        }
    }
    export default Declaration