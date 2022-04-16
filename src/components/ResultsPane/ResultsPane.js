import { Paper, Typography } from "@mui/material"
import createOrderList from "../../services/createOrderList"
import roundList from "../../utils/data/roundList"

const ResultsPane = ({players, round}) => {

    const orderPlayers = () => {
        const pDealIndex = round % players.length
        const pStartIndex = pDealIndex + 1 === players.length ? 0 : pDealIndex + 1
        const declareOrderList = createOrderList(pStartIndex, players.length)
        const declarations = declareOrderList.map(i => players[i].declaration)
        const maxPlayerIndex = declarations.indexOf(Math.max(...declarations))
        const res = players.sort((a, b) => b.scores[round] - a.scores[round]).map((pl, i) => {
            return (
            <div style={{display:'flex', justifyContent:'space-between'}}>
                <p style={{fontSize:18, fontFamily:'sans-serif', margin: '8px 0px'}}>
                    {i+1}. {pl.name}
                </p>
                <p style={{fontSize:18, fontFamily:'sans-serif', margin: '8px 0px'}}>
                    {pl.scores[round]}
                </p>
            </div>
            )
        })
        return res
    }

    return (
        <Paper elevation={4} className='paneContainer'>
        <div style={{width: `100%`, display:'flex', justifyContent:'space-between'}}>
        <Typography variant='h5' style={{fontWeight:'bold', marginBottom: 16}}>
            Round {round + 1}: {roundList[round]} {roundList[round] === 1 ? 'card' : 'cards'}
        </Typography>
        </div>
        <div>
            {orderPlayers()}
        </div>
        </Paper>
    )
}
export default ResultsPane