import { Button, Paper, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import LayoutContainer from '../../components/LayoutContainer'
import { findAge } from './helper'

function AgeCalculator(props) {
    const { callBack = () => { } } = props
    const [selectedDate, setSelectedDate] = useState(null)
    const [res, setRes] = useState('')
    const [error, setError] = useState('')

    const onDateChangeHandler = (e) => {
        const selectedDate = new Date(e.target.value)
        const currentDate = new Date()
        if (selectedDate > currentDate) {
            setError('Enter Past Date')
            return
        }
        setSelectedDate(selectedDate)
        setError('')

    }

    const OnCalculateHandler = () => {
        callBack()
        const age = findAge(selectedDate)
        setRes(age)
    }

    return (
        <LayoutContainer>
            <Paper elevation={3} style={{ height: 500, width: 550, display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}>
                <input onChange={onDateChangeHandler} type={'date'} placeholder={'Enter you birthdate'} />
                 <Button disabled={!!error} onClick={OnCalculateHandler} variant={'contained'} color={'primary'}>Calculate</Button>
                <span id='res'>{res}</span>
                <Typography id='error'>{error}</Typography>
            </Paper>
        </LayoutContainer>
    )
}

export default AgeCalculator
