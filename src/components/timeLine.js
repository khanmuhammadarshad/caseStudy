import React from 'react';
import { makeStyles, useTheme, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
const TimeLineStyles = createMuiTheme({
    overrides: {
        MuiTimeline: {
            root: {
                padding: 0,
            }
        },
        MuiTimelineItem: {
            missingOppositeContent: {
                "&:before": {
                    flex: 0,
                    padding: 0,
                }
            }
        }
    },
    palette: {
        secondary: {
            main: '#00BF2C'
        }
    }
});

const useStyles = makeStyles((theme) => ({
    root: {
    },

}));

export default function TimeLineApp() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item md={12} sm={12} xs={12} >
                    <MuiThemeProvider theme={TimeLineStyles}>
                        <Timeline >
                            <TimelineItem>
                                <TimelineSeparator>
                                    <CheckCircleIcon color="secondary" />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <div style={{ position: 'relative', marginTop: '-4px' }}>
                                        <div style={{ position: 'absolute', left: 0 }}>Open </div>
                                        <div style={{ position: 'absolute', right: 0 }}>07:54 PM</div>
                                    </div>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineSeparator>
                                    <CheckCircleIcon color="secondary" />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <div style={{ position: 'relative', marginTop: '-4px' }}>
                                        <div style={{ position: 'absolute', left: 0 }}>Accepted </div>
                                        <div style={{ position: 'absolute', right: 0 }}>07:54 PM</div>
                                    </div>
                                </TimelineContent>                            </TimelineItem>
                            <TimelineItem>
                                <TimelineSeparator>
                                    <CheckCircleIcon color="secondary" />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <div style={{ position: 'relative', marginTop: '-4px' }}>
                                        <div style={{ position: 'absolute', left: 0 }}>Closed </div>
                                        <div style={{ position: 'absolute', right: 0 }}>07:54 PM</div>
                                    </div>
                                </TimelineContent>
                            </TimelineItem>
                        </Timeline>
                    </MuiThemeProvider>
                </Grid>

            </Grid>
        </div>
    );
}
