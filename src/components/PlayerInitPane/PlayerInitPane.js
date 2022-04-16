import { Button, Paper, TextField, Typography } from '@mui/material'
import roundList from '../../utils/data/roundList'
import '../paneContainer.css'

const PlayerInitPane = ({players, setPlayers}) => {

    const addPlayer = () => {
        const newPlayers = [...players]
        newPlayers.push({
            name: '',
            scores: Array(roundList.length).fill(0),
            declaration: -1,
            obtained: -1
        })
        setPlayers(newPlayers)
    }

    const updatePlayer = (i) => {
        return (e) => {
            const newPlayers = [...players]
            newPlayers[i].name = e.target.value
            setPlayers(newPlayers)
        }
    }

    const playerFields = players.map((x, i) => 
    <TextField size='small' fullWidth style={{marginTop: 16}} onChange={updatePlayer(i)} value={x.name}/>
    )

    return (
        <Paper elevation={4} className='paneContainer'>
        <div style={{width: `100%`, display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom: 8}}>
        <Typography variant='h5' style={{fontWeight:'bold'}}>
        Add Players
        </Typography>
        <Button variant='outlined' onClick={addPlayer}>Add</Button>
        </div>
        {playerFields}
        </Paper>
        )
        
    }
    export default PlayerInitPane