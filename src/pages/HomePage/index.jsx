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
            cursor: 'pointer',
            minWidth: 150
        },
        root: {
            display: 'flex',
            backgroundColor: '#141313',
            justifyContent: 'center',
            overflowX: 'scroll',

            '& > *': {
                margin: theme.spacing(1),
                width: theme.spacing(16),
                height: theme.spacing(16),
            },
        },
    }),
);

const APPS = [{
    route: '/bmi',
    title: '  BMI Calculator'
},
{
    route: '/age',
    title: 'Age Calculator'
},
{
    route: '/vel',
    title: 'Velocity Calculator'
},
{
    route: '/dayfinder',
    title: 'Day Finder'
},
]

export default function HomePage() {

    const classes = useStyles();
    const history = useHistory()
    const [currentPath, setCurrentPath] = useState(history.location.pathname)
    useEffect(() => {
        history.listen((path) => {
            setCurrentPath(path.pathname)
        })


    }, [])

    const onAppClick = (path) => {
        history.push(path)
    }

    return (
        <div className={classes.container}>
            <div className={classes.root}>
                {
                    APPS.map((i) =>
                        <Paper key={i.route} onClick={() => onAppClick(i.route)} elevation={3} className={`${classes.paper} ${currentPath === i.route ? classes.active : ''}`} >
                            {i.title}
                        </Paper>
                    )
                }
            </div>
        </div>

    );
}
