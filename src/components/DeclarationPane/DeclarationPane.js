import { Button, ButtonGroup, IconButton, Paper, TextField, Typography } from '@mui/material'
import '../paneContainer.css'
import roundList from '../../utils/data/roundList'
import createOrderList from '../../services/createOrderList'
import { Add, Remove } from '@mui/icons-material'

const DeclarationPane = ({players, setPlayers, round}) => {

    const pDealIndex = round % players.length
    const pStartIndex = pDealIndex + 1 === players.length ? 0 : pDealIndex + 1

    const addDeclaration = (i) => {
        return () => {
            const newPlayers = [...players]
            if (newPlayers[i].declaration < roundList[round]) {
                newPlayers[i].declaration++
            }
            setPlayers(newPlayers)
        }
    }

    const minusDeclaration = (i) => {
        return () => {
            const newPlayers = [...players]
            if (newPlayers[i].declaration > 0) {
                newPlayers[i].declaration--
            }
            setPlayers(newPlayers)
        }
    }

    const playerDeclarationList = createOrderList(pStartIndex, players.length).map(i => {
        return (
        <div style={{display:'flex', justifyContent:'space-between'}}>
            <p style={{fontSize:18, fontFamily:'sans-serif', margin: '8px 0px'}}>
                {players[i].name}
            </p>
            <div style={{display:'flex'}}>
                <IconButton onClick={minusDeclaration(i)}>
                    <Remove/>
                </IconButton>
                <p style={{fontSize:18, fontFamily:'sans-serif', margin: '8px 0px'}}>
                {players[i].declaration}
                </p>
                <IconButton onClick={addDeclaration(i)}>
                    <Add/>
                </IconButton>
            </div>
        </div>
        )
    })

    return (
        <Paper elevation={4} className='paneContainer'>
        <div style={{width: `100%`, display:'flex', justifyContent:'space-between'}}>
        <Typography variant='h5' style={{fontWeight:'bold', marginBottom: 16}}>
        {players[pDealIndex].name}, deal {roundList[round]} cards
        </Typography>
        </div>
        <div>
            {playerDeclarationList}
        </div>
        </Paper>
        )
        
    }
    export default DeclarationPane