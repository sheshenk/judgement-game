import { Button, ButtonGroup, IconButton, Paper, TextField, Typography } from '@mui/material'
import '../paneContainer.css'
import roundList from '../../utils/data/roundList'
import createOrderList from '../../services/createOrderList'
import { Add, Remove } from '@mui/icons-material'

const RedeclarationPane = ({players, setPlayers, round}) => {

    console.log(players)

    const pDealIndex = round % players.length
    const pStartIndex = pDealIndex + 1 === players.length ? 0 : pDealIndex + 1

    const addObtained = (i) => {
        return () => {
            const newPlayers = [...players]
            if (newPlayers[i].obtained < roundList[round]) {
                newPlayers[i].obtained++
                const dec = newPlayers[i].declaration
                if (newPlayers[i].obtained === dec) {
                    newPlayers[i].scores[round] = ((dec + 1) * 10) + (dec)
                } else {
                    newPlayers[i].scores[round] = 0
                }
            }
            setPlayers(newPlayers)
        }
    }

    const minusObtained = (i) => {
        return () => {
            const newPlayers = [...players]
            if (newPlayers[i].obtained > 0) {
                newPlayers[i].obtained--
                const dec = newPlayers[i].declaration
                if (newPlayers[i].obtained === dec) {
                    newPlayers[i].scores[round] = ((dec + 1) * 10) + (dec)
                } else {
                    newPlayers[i].scores[round] = 0
                }
            }
            setPlayers(newPlayers)
        }
    }

    const playerRedeclarationList = createOrderList(pStartIndex, players.length).map(i => {
        return (
        <div style={{display:'flex', justifyContent:'space-between'}}>
            <p style={{fontSize:18, fontFamily:'sans-serif', margin: '8px 0px'}}>
                {players[i].name}
            </p>
            <div style={{display:'flex'}}>
                <IconButton onClick={minusObtained(i)}>
                    <Remove/>
                </IconButton>
                <p style={{fontSize:18, fontFamily:'sans-serif', margin: '8px 0px', color: players[i].obtained === players[i].declaration ? 'green' : 'red'}}>
                {players[i].obtained}
                </p>
                <IconButton onClick={addObtained(i)}>
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
        How many sets did you make?
        </Typography>
        </div>
        <div>
            {playerRedeclarationList}
        </div>
        </Paper>
        )
        
    }
    export default RedeclarationPane