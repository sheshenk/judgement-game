import { Button, Paper, TextField, Typography } from '@mui/material'
import './PlayerInitPane.css'

const PlayerInitPane = ({players, setPlayers}) => {

    const addPlayer = () => {
        const newPlayers = [...players]
        newPlayers.push({
            name: '',
            scores: [],
            declaration: -1
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
        <Paper elevation={4} className='playerInitContainer'>
        <div style={{width: `100%`, display:'flex', justifyContent:'space-between'}}>
        <Typography variant='h5'>
        Add Players
        </Typography>
        <Button variant='outlined' onClick={addPlayer}>Add</Button>
        </div>
        {playerFields}
        </Paper>
        )
        
    }
    export default PlayerInitPane