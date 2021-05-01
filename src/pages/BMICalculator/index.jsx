import { Button, Input, Paper, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import LayoutContainer from '../../components/LayoutContainer'
import { findBMI } from './helper'

function BMICalculator() {
    const [state, setState] = useState({ res: '', height: '', weight: '' })
    const { res, height, weight } = state

    const updateState = (obj) => {
        setState({ ...state, ...obj })
    }

    const onCalculate = () => {
        if (height && weight) {
            const heightFloat = parseFloat(height)
            const weightFloat = parseFloat(weight)
            const res = findBMI(weightFloat, heightFloat)
            updateState({ res })
        }
    }

    const onChangeEle = (e) => {
        const value = e.target.value
        updateState({ [e.target.name]: value })
    }



    return (
        <LayoutContainer>
            <Paper elevation={3} style={{
                height: 500, width: 550, display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center'
            }}>

                <Typography>
                    BMI Calculator
                </Typography>


                <Input
                    value={height}
                    type="number"
                    name={'height'}
                    onChange={onChangeEle}
                    placeholder={"Enter height"}
                    style={{ margin: 20 }}
                />

                <Input
                    name={'weight'}
                    type="number"
                    value={weight}
                    onChange={onChangeEle}
                    placeholder={"Enter weight"} />

                <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center', marginTop: 20 }}>
                    <Button onClick={onCalculate} color={'primary'} variant={'contained'}  >
                        Calculate
                </Button>

                    <Typography style={{ marginTop: 20 }}>
                        BMI : <span> {res}</span>
                    </Typography>
                </div>
            </Paper>

        </LayoutContainer>
    )
}

export default BMICalculator
