import React from 'react';

import {
    Toolbar,
    Button,
    ButtonGroup,
    Typography,
    Paper,
    makeStyles,
} from '@material-ui/core';

import { 
    BrandIcon,
    BikeIcon, 
    ChargeIcon, 
    CityIcon, 
    MinusIcon,
    PlusIcon, 
    SearchIcon,
    ServiceIcon, 
    ZoomIcon,     
} from '../Icons';

const useStyles = makeStyles(theme => ({
    cityText: {
        fontWeight: 500, color: '#626262'
    },
    btnBrand: {
        paddingRight: theme.spacing(6),
        paddingLeft: theme.spacing(2),
        backbround: theme.palette.grey[900],
        // background: "linear-gradient(135deg, rgba(100,242,159,1) 0%, rgba(17,182,159,1) 100%)",
    },
    btnIcon: {
        padding: theme.spacing(1.75),
        paddingTop: theme.spacing(1.5),
        paddingBottom: theme.spacing(1.5),
    },
    btnZoom: {
        padding: theme.spacing(1),
    },
})); 

const Commandbar = (props) => {
    const cl = useStyles();
    
    return (
        <Paper elevation={12}>
        <ButtonGroup
        variant="text"
        size='large'>
            <Button disabled className={cl.btnBrand}>
                <BrandIcon color="#626262" height={28} />
            </Button>

            <Button 
            startIcon={<CityIcon size="small"/>} 
            className={cl.btnIcon}>
                <Typography className={cl.cityText}>Delhi</Typography>
            </Button>

            <Button className={cl.btnIcon}
            onClick={props.toggleFleet}>
                <BikeIcon />
            </Button>

            <Button className={cl.btnIcon}
            onClick={props.toggleChargeStations}>
                <ChargeIcon size="small"/>
            </Button>

            <Button className={cl.btnIcon}
            onClick={props.toggleServiceStations}>
                <ServiceIcon size="small"/>
            </Button>

            <Button className={cl.btnIcon}
            onClick={props.toggleSearch}>
                <SearchIcon size="small"/>
            </Button>
            
        </ButtonGroup>
        </Paper>
    );
}

const ZoomControl = (props) => {
    const cl = useStyles();
    
    return (
        <Toolbar>
            <Paper elevation={12}>
            <ButtonGroup
                orientation="vertical"
                variant="outlined">
                    
                <Button className={cl.btnZoom}
                onClick={props.onFitExtent}>
                    <ZoomIcon />
                </Button>
                <Button className={cl.btnZoom} 
                onClick={props.onZoomIn} >
                    <PlusIcon />
                </Button>
                <Button className={cl.btnZoom}
                onClick={props.onZoomOut} >
                    <MinusIcon />
                </Button>
                
            </ButtonGroup>
            </Paper>
        </Toolbar>
    );
}

export { Commandbar, ZoomControl };