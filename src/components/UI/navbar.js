import React, {useState} from 'react';

import {
    AppBar, Toolbar,
    ButtonGroup, Button,
    Menu, MenuItem, 
    makeStyles,
    Typography
} from '@material-ui/core';

import BrandIcon from '@material-ui/icons/OfflineBolt';
import CityIcon from '@material-ui/icons/LocationCity';
import ChargeIcon from '@material-ui/icons/EvStation';
import SearchIcon from '@material-ui/icons/Search';
import ServiceIcon from '@material-ui/icons/Build';
import FleetIcon from '@material-ui/icons/Motorcycle';

const useStyles = makeStyles(theme => ({
    push: {
        flexGrow: 1,
    },
    appbar: {
        backgroundColor: 'transparent', boxShadow: 'none',
        padding: theme.spacing(2)
    },
    highlight: {
        backgroundColor: theme.palette.primary.main
    },
    sp1: {
        marginRight: theme.spacing(1)
    }
}));

const NavBar = (props) => {
    const cl = useStyles();
    return (
    <React.Fragment>
    <AppBar position="fixed"
        className={cl.appbar}
        >
            <Toolbar>
                <Button disabled variant="contained" size="small">
                        <BrandIcon className={cl.sp1}/>
                    <Typography>ivec-console</Typography>
                </Button>
                <div className={cl.push} />
                
                <ButtonGroup
                    variant="contained"
                    aria-label="contained primary button group"
                    component="nav"
                    size="small"
                >
                    <Button>
                            <CityIcon className={cl.sp1}/>
                        <Typography>{props.currentCity}</Typography>
                    </Button>
                        
                    <Button id="btnFleet"
                        color={props.showFleet === true ? 'primary' : 'default'}
                        onClick={props.toggleFleet}
                    >
                        <FleetIcon />
                    </Button>

                    <Button id="btnCharge"
                        color={props.showChargeStations === true ? 'primary' : 'default'}
                        onClick={props.toggleChargeStations}
                    >
                        <ChargeIcon />
                    </Button>

                    <Button id="btnService"
                        color={props.showServiceStations === true ? 'primary' : 'default'}
                        onClick={props.toggleServiceStations}
                    >
                        <ServiceIcon />
                    </Button>

                    <Button id="btnSearch">
                        <SearchIcon />
                    </Button>
                </ButtonGroup>
            </Toolbar>
        </AppBar>
    </React.Fragment>
    );
}

export default NavBar;
