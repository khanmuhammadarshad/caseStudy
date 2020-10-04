import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Details from './details'
import TimeLineApp from './timeLine'
import AgentNotes from './agentNotes'
const TabsStyles = createMuiTheme({
    overrides: {
        MuiTab: {
            root: {
                "&.MuiTab-root": {
                    backgroundColor: "white",
                    border: '1px solid #e8e8e8',
                    minHeight: 30,
                    fontSize: 12,
                    fontWeight:600,
                    color:'#777C7E',
                    // minWidth: 122,
                    "&:hover": {
                        borderBottom: "1px solid green",
                    },
                },
                "&.Mui-selected": {
                    backgroundColor: "#00BF2C",
                    color: 'white',
                    fontWeight:600,
                }
            }
        }
    }
});

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={1}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
    },
   
}));

export default function SuchuduledTab() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <div className={classes.root}>
            <Grid container style={{ flexGrow: 1 }}>
                <Grid item md={12} sm={12} xs={12} style={{ alignSelf: 'center', alignItems: 'center', alignContent: 'center', }}>
                    <MuiThemeProvider theme={TabsStyles}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            indicatorColor="white"
                            textColor="white"
                            variant="fullWidth"
                            scrollButtons="auto"
                            aria-label="scrollable auto tabs example" >
                            <Tab label="Details" {...a11yProps(0)} />
                            <Tab label="Timeline" {...a11yProps(1)} />
                            <Tab label="Agent Notes" {...a11yProps(2)} />
                        </Tabs>
                    </MuiThemeProvider>
                </Grid>
                <Grid item md={12} sm={12} xs={12} >
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={value}
                        onChangeIndex={handleChangeIndex}
                    >
                        <TabPanel value={value} index={0} dir={theme.direction}>
                            <Details />
                        </TabPanel>
                        <TabPanel value={value} index={1} dir={theme.direction}>
                        <TimeLineApp />
                        </TabPanel>
                        <TabPanel value={value} index={2} dir={theme.direction}>
                        <AgentNotes />
                          </TabPanel>
                    </SwipeableViews>
                </Grid>
            </Grid>
        </div>
    );
}
