import React, { useState } from 'react'
import { Button, Paper, TextField, Typography } from '@material-ui/core'
import LayoutContainer from '../../components/LayoutContainer'
import { findDay } from './helper'

function DayFinder() {
    const [state, setState] = useState({
        date: '',
        res: ''
    })
    const onChange = (e) => {

        setState({ ...state, date: e.target.value })


    }
    const onCaclulate = () => {
        const day = findDay(state.date)
        setState({ ...state, res: day })
    }
    
    return (
        <LayoutContainer>
            <Paper elevation={3} style={{ height: 500, width: 550, display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}>
                <TextField onChange={onChange} placeholder={'Enter Date'} />
                <Button onClick={onCaclulate} color={'primary'} variant={'contained'}>
                    Calculate
                </Button>
                <Typography>
                    {state.res}
                </Typography>
            </Paper>
        </LayoutContainer>
    )
}

export default DayFinder
