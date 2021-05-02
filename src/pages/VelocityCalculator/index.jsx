import React, { useState } from 'react'
import { Button, Paper, TextField, Typography } from '@material-ui/core'
import LayoutContainer from '../../components/LayoutContainer'


function VelocityCalculator(props) {
    const [state, setState] = useState({
        res: '',
        distance: '',
        time: ''
    })
    const { res } = state

    const onFieldChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }
    const onCalculate = () => {
        const { distance, time } = state
        if (distance && time) {
            const velocity = parseFloat(parseFloat(distance) / parseFloat(time))
            setState({ ...state, res: velocity })
        }
        
    }

    return (
        <LayoutContainer>
            <Paper elevation={3} style={{ height: 500, width: 550, display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}>
                <TextField
                    type={"number"}
                    placeholder={"Enter Distance"}
                    onChange={onFieldChange}
                    name={'distance'}
                />
                <TextField
                    type={'number'}
                    placeholder={'Enter Time'}
                    onChange={onFieldChange}
                    name={'time'}
                />

                <Button onClick={onCalculate} color={"primary"} variant={'contained'}>
                    Calculate
                </Button>
                <Typography>
                    {res}
                </Typography>
            </Paper>
        </LayoutContainer>
    )
}

export default VelocityCalculator
