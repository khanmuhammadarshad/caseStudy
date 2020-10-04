import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SchuduledTabs from './schuduledTabs'
import Maps from './map'

const TabsStyle = createMuiTheme({
    overrides: {
        MuiTab: {
            root: {
                "&.MuiTab-root": {
                    backgroundColor: "white",
                    border: '1px solid #e8e8e8',
                    minHeight: 30,
                    fontSize: 12,
                    fontWeight: 600,
                    color: '#777C7E',
                    "&:hover": {
                        borderBottom: "1px solid green",
                    },
                },
                "&.Mui-selected": {
                    backgroundColor: "#00BF2C",
                    color: 'white',
                    fontWeight: 600,
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
                <Box>
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
    AccountCircleIcons: {
        color: '#eee',
        fontSize: 37,
        marginRight: 10,
    },
    ExitToAppIcons: {
        color: '#00BF2C',
        fontSize: 37,
        marginRight: 10
    },
    logoutText: {
        color: '#777C7E', fontWeight: 600, fontSize: 13, marginRight: 10
    }
}));

export default function Index() {
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
            <Grid container style={{ flexGrow: 1, padding: 5 }}>
                <Grid item md={6} sm={12} xs={12} style={{ display: 'flex', alignSelf: 'center', alignItems: 'center', alignContent: 'center' }} >
                    <AccountCircleIcon className={classes.AccountCircleIcons} />
                    <ExitToAppIcon className={classes.ExitToAppIcons} />
                    <div className={classes.logoutText}>Logout</div>
                </Grid>
                <Grid item md={6} sm={12} xs={12} style={{ alignSelf: 'center', alignItems: 'center', alignContent: 'center', marginTop: 12 }}>
                    <MuiThemeProvider theme={TabsStyle}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            indicatorColor="green"
                            textColor="white"
                            variant="fullWidth"
                            // variant="scrollable"
                            scrollButtons="auto"
                            aria-label="scrollable auto tabs example"
                        >
                            <Tab label="QUEUE" {...a11yProps(0)} />
                            <Tab label="SCHEDULED" {...a11yProps(1)} />
                            <Tab label="IN PROGRESS" {...a11yProps(2)} />
                            <Tab label="COMPLETED" {...a11yProps(3)} />
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
                            {/* QUEUE */}
                         </TabPanel>
                        <TabPanel value={value} index={1} dir={theme.direction}>
                            <Grid container >
                                <Grid item md={6} sm={12} xs={12}  >
                                    <SchuduledTabs />
                                </Grid>
                                <Grid item md={6} sm={12} xs={12} >
                                    <Maps />
                                </Grid>
                            </Grid>
                        </TabPanel>
                        <TabPanel value={value} index={2} dir={theme.direction}>
                            {/* IN PROGRESS */}
                        </TabPanel>
                        <TabPanel value={value} index={3} dir={theme.direction}>
                            {/* COMPLETED */}
                        </TabPanel>
                    </SwipeableViews>
                </Grid>
            </Grid>
        </div>
    );
}
