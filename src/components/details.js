import React from 'react';
import { makeStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import RoomIcon from '@material-ui/icons/Room';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import { DetailData } from './index'

const TimeLineStyles = createMuiTheme({
    palette: {
        secondary: {
            main: '#00BF2C'
        },
        primary: {
            main: '#DF0202'
        }
    }
});

const useStyles = makeStyles((theme) => ({
    root: {
        // flexGrow: 1
        // flexGrow: 1,
        // width: '100%',
    },
    heading: {
        fontSize: 14,
        fontWeight: 700,
        paddingBottom: 5,
        paddingTop: 5
    },
    description: {
        fontSize: 14,
        fontWeight: 500,

    },
    underline: {
        "&&&:before": {
            borderBottom: "none"
        },
        "&&:after": {
            borderBottom: "none"
        }
    }
}));

export default function Details(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <DetailData.Consumer>
                {(data) => {
                    return (
                        <div>
                            {!data.isloading ?
                                <div>
                                    <Grid container spacing={2}  >
                                        <Grid item md={6} sm={12} xs={12} >
                                            <Paper style={{ padding: 5 }} >
                                                <Grid container  >
                                                    <Grid item md={1} sm={12} xs={12}  >
                                                        <MuiThemeProvider theme={TimeLineStyles}>
                                                            <RoomIcon style={{ marginTop: 3 }} color="secondary" />
                                                        </MuiThemeProvider>
                                                    </Grid>
                                                    <Grid item md={11} sm={12} xs={12}  >
                                                        <TextField value={data.data[0].pickUp} InputProps={{ classes }} fullWidth placeholder="Pickup " style={{ border: 0 }} />
                                                    </Grid>
                                                </Grid>
                                            </Paper>
                                        </Grid>
                                        <Grid item md={6} sm={12} xs={12}  >
                                            <Paper style={{ padding: 5 }} >
                                                <Grid container>
                                                    <Grid item md={1} sm={12} xs={12}  >
                                                        <MuiThemeProvider theme={TimeLineStyles}>
                                                            <RoomIcon style={{ marginTop: 3 }} color="primary" />
                                                        </MuiThemeProvider>
                                                    </Grid>
                                                    <Grid item md={11} sm={12} xs={12}  >
                                                        <TextField value={data.data[0].dropUp} InputProps={{ classes }} fullWidth placeholder="Drop-off " style={{ border: 0 }} />
                                                    </Grid>
                                                </Grid>
                                            </Paper>
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={2} style={{ marginTop: 15 }}>
                                        <Grid item md={6} sm={12} xs={12}  >
                                            <Paper style={{ backgroundColor: '#FAFAFA', padding: 10, minHeight: 156, }} >
                                                <div className={classes.heading} key={"Naina"}>{data.data[0].name}</div>
                                                <div className={classes.description} key={"Shah faisal"}>{data.data[0].pickUp}</div>
                                                <div className={classes.heading}>Alternative Contact</div>
                                                <div className={classes.description}>{data.data[0].alternativeNumber}</div>
                                                <div style={{ paddingTop: 10 }} className={classes.description}>Amount: {data.data[0].amount}</div>
                                            </Paper>
                                        </Grid>
                                        <Grid item md={6} sm={12} xs={12}  >
                                            <Paper style={{ backgroundColor: '#FAFAFA', padding: 10, minHeight: 156, }} >
                                                <div className={classes.description}>{data.data[0].dropUp}</div>
                                            </Paper>
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={2} style={{ marginTop: 15 }}>
                                        <Grid item md={10} sm={12} xs={12}  >
                                            <TextField InputProps={{ classes }} fullWidth style={{ background: '#F1F1F1', padding: 4 }} />
                                        </Grid>
                                        <Grid item md={2} sm={12} xs={12}  >
                                            <Button style={{ backgroundColor: '#E0E0E0', color: '#000' }} variant="contained" >
                                                Assign
                     </Button>
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={2} style={{ marginTop: 15 }}>
                                        <Grid item md={8} sm={12} xs={12}></Grid>
                                        <Grid item md={4} sm={12} xs={12}>
                                            <Button fullWidth style={{ backgroundColor: '#E0E0E0', color: '#000' }} variant="contained" >
                                                Cancel Booking
                     </Button>
                                        </Grid>
                                    </Grid>
                                </div >
                                : <div style={{ width: '100%', marginTop: 30, textAlign: 'center' }}>  <MuiThemeProvider theme={TimeLineStyles}><CircularProgress color="secondary" /></MuiThemeProvider></div>}
                        </div>
                    )
                }}
            </DetailData.Consumer>
        </div >
    );
}
