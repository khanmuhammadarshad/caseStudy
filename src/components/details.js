import React from 'react';
import { makeStyles, useTheme, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import RoomIcon from '@material-ui/icons/Room';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

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

export default function Details() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <div className={classes.root}>
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
                                <TextField InputProps={{ classes }} fullWidth placeholder="Pickup " style={{ border: 0 }} />
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
                                <TextField InputProps={{ classes }} fullWidth placeholder="Drop-off " style={{ border: 0 }} />
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
            <Grid container spacing={2} style={{ marginTop: 15 }}>
                <Grid item md={6} sm={12} xs={12}  >
                    <Paper style={{ backgroundColor: '#FAFAFA', padding: 10,minHeight: 156, }} >
                        <div className={classes.heading}>Naina</div>
                        <div className={classes.description}>Shah faisal colony number 5 house number 5/1921</div>
                        <div className={classes.heading}>Alternative Contact</div>
                        <div className={classes.description}>03158173127</div>
                        <div style={{ paddingTop: 10 }} className={classes.description}>Amount: null</div>
                    </Paper>
                </Grid>
                <Grid item md={6} sm={12} xs={12}  >
                    <Paper style={{ backgroundColor: '#FAFAFA', padding: 10 ,minHeight: 156,}} >
                        {/* <div className={classes.heading}>Naina</div> */}
                        <div className={classes.description}>Shah faisal colony number 5 house number 5/1951</div>
                        {/* <div className={classes.heading}>Alternative Contact</div> */}
                        {/* <div className={classes.description}>03158173127</div> */}
                        {/* <div style={{ paddingTop: 10 }} className={classes.description}>Amount: null</div> */}
                    </Paper>
                </Grid>
            </Grid>
            <Grid container spacing={2} style={{ marginTop: 15 }}>
                <Grid item md={10} sm={12} xs={12}  >
                    <TextField InputProps={{ classes }} fullWidth style={{ background:'#F1F1F1',padding:4 }} />
                </Grid>
                <Grid item md={2} sm={12} xs={12}  >
                <Button style={{backgroundColor: '#E0E0E0',color:'#000'}}  variant="contained" >
                   Assign
                     </Button>
                </Grid>
            </Grid>
            <Grid container spacing={2} style={{ marginTop: 15 }}>
                <Grid item md={8} sm={12} xs={12}></Grid>
                <Grid item md={4} sm={12} xs={12}>
                <Button fullWidth style={{backgroundColor: '#E0E0E0',color:'#000'}}  variant="contained" >
                   Cancel Booking
                     </Button>
                </Grid>
                </Grid>
        </div >
    );
}
