import React from 'react';

import {
    Toolbar,
    Button,
    ButtonGroup,
    Typography,
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
} from './Icons';

const useStyles = makeStyles(theme => ({
    cityText: {
        fontWeight: 500, color: '#626262'
    },
    btnBrand: {
            paddingRight: theme.spacing(8),
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
        <ButtonGroup
            variant="contained"
            size='large'>
            <Button disabled className={cl.btnBrand}>
                <BrandIcon color="#626262" height={28} />
            </Button>

            <Button 
                startIcon={<CityIcon size="small"/>} 
                className={cl.btnIcon}>
                <Typography className={cl.cityText}>Delhi</Typography>
            </Button>

            <Button className={cl.btnIcon}>
                <BikeIcon />
            </Button>

            <Button className={cl.btnIcon}>
                <ChargeIcon size="small"/>
            </Button>

            <Button className={cl.btnIcon}>
                <ServiceIcon size="small"/>
            </Button>

            <Button className={cl.btnIcon}>
                <SearchIcon size="small"/>
            </Button>
            
        </ButtonGroup>
    );
}

const MapControl = (props) => {
    const cl = useStyles();
    return (
        <Toolbar>
        <ButtonGroup
            orientation="vertical"
            variant="contained">
                
            <Button className={cl.btnZoom}><ZoomIcon /></Button>
            <Button className={cl.btnZoom}><PlusIcon /></Button>
            <Button className={cl.btnZoom}><MinusIcon /></Button>
            
        </ButtonGroup>
        </Toolbar>
    );
}

export { Commandbar, MapControl };