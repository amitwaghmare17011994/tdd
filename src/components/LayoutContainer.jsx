import React from 'react'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            justifyContent: 'center',
            height: '100%',
            textAlign: 'center',
            backgroundColor: '#f4f4f4'
        },

    }),
);

const LayoutContainer = (props) => {
    const classes = useStyles()
    return <div className={classes.container}>
        <div style={{ padding: 20,justifyContent:'center',display:'flex' }}>
            {props.children}
        </div>
    </div>

}
export default LayoutContainer