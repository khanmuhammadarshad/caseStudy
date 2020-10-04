import React from 'react';
import { makeStyles, useTheme, } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
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

    }
}));

export default function AgentNotes() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    return (
        <div className={classes.root}>
            <Grid container style={{ flexGrow: 1 }}>
                <Grid item md={12} sm={12} xs={12} >
                    <div style={{ textAlign: 'center', fontSize: 17,color:'#BFBFB8',fontWeight:400,paddingBottom: 10, }}>No Noted</div>
                    <TextField
                        id="outlined-textarea"
                        label="Leave a note"
                        placeholder="Leave a note"
                        multiline
                        variant="outlined"
                        rowsMax={10}
                        style={{ width: "100%", }}
                    />

                </Grid>
                <Grid item md={9} sm={12} xs={12}></Grid>
                <Grid item md={3} sm={12} xs={12} >
                <Button style={{marginLeft:56,marginTop:10,backgroundColor: '#00BF2C',color:'white'}}  variant="contained" >
                    Save Note
                     </Button>
                </Grid>

              
            </Grid>
        </div>
    );
}
