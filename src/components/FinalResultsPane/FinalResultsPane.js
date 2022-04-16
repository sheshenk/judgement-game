import { Paper, Typography } from "@mui/material"
import createOrderList from "../../services/createOrderList"
import roundList from "../../utils/data/roundList"

const FinalResultsPane = ({players, round}) => {

    const orderPlayers = () => {
        const pDealIndex = round % players.length
        const pStartIndex = pDealIndex + 1 === players.length ? 0 : pDealIndex + 1
        const declareOrderList = createOrderList(pStartIndex, players.length)
        const res = players.sort((a, b) => b.scores.reduce((a,b) => a + b, 0) - a.scores.reduce((a,b) => a + b, 0)).map((pl, i) => {
            return (
            <div style={{display:'flex', justifyContent:'space-between'}}>
                <p style={{fontSize:18, fontFamily:'sans-serif', margin: '8px 0px'}}>
                    {i+1}. {pl.name}
                </p>
                <p style={{fontSize:18, fontFamily:'sans-serif', margin: '8px 0px'}}>
                    {pl.scores.reduce((a,b) => a + b, 0)}
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
            Final Scores
        </Typography>
        </div>
        <div>
            {orderPlayers()}
        </div>
        </Paper>
    )
}
export default FinalResultsPane