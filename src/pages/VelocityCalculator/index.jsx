import React from 'react'
import { Paper } from '@material-ui/core'
import LayoutContainer from '../../components/LayoutContainer'


function VelocityCalculator(props) {

    return (
        <LayoutContainer>
            <Paper elevation={3} style={{ height: 500, width: 550, display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}>
            VelocityCalculator
            </Paper>
        </LayoutContainer>
    )
}

export default VelocityCalculator
