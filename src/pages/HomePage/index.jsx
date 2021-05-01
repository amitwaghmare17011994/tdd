import React, { useEffect, useState } from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            display: 'flex',
            flexDirection: 'column',
        },
        body: {
            flex: 1
        },
        active: {
            backgroundColor: '#b578b5',
            color: 'white'
        },
        paper: {
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            cursor: 'pointer'
        },
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            backgroundColor: '#141313',
            justifyContent: 'center',
            '& > *': {
                margin: theme.spacing(1),
                width: theme.spacing(16),
                height: theme.spacing(16),
            },
        },
    }),
);

export default function HomePage() {
    const classes = useStyles();
    const history = useHistory()
    const [currentPath, setCurrentPath] = useState(history.location.pathname)
    useEffect(() => {
        history.listen((path) => {
            setCurrentPath(path.pathname)
        })
    })
    const onAppClick = (path) => {
        history.push(path)
    }

    return (
        <div className={classes.container}>
            <div className={classes.root}>
                <Paper onClick={() => onAppClick('/bmi')} elevation={3} className={`${classes.paper} ${currentPath === '/bmi' ? classes.active : ''}`} >
                    BMI Calculator
                </Paper>
                <Paper onClick={() => onAppClick('/age')} elevation={3} className={`${classes.paper} ${currentPath === '/age' ? classes.active : ''}`} >
                    Age Calculator
                </Paper>
            </div>
        </div>

    );
}
