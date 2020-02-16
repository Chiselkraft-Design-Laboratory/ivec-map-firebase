import React from 'react';

import {
    AppBar, Button, ButtonGroup,
    makeStyles, Paper, Toolbar,
    Typography, useTheme
} from '@material-ui/core';

import { 
    BrandIcon, BikeIcon, ChargeIcon, 
    CityIcon, SearchIcon, ServiceIcon, 
} from '../Icons';
const useStyles = makeStyles(theme => ({
    push: { flexGrow: 1},
    cityText: {
        fontWeight: 500,
    },
    btnBrand: {
        paddingRight: theme.spacing(6),
        paddingLeft: theme.spacing(2),
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
    const fill = useTheme().palette.secondary.main;
    const highlight = useTheme().palette.success.main;
    const cl = useStyles();
    
    return (
        <AppBar
            variant="elevation"
            position="fixed"
            component="nav"
            elevation={0}
        >
            <Toolbar>
            {props.dock==='right' ? <div className={cl.push} /> : null}
                <Paper elevation={24}>
                    <ButtonGroup
                        variant="contained"
                        size='large' >
                        <Button disabled className={cl.btnBrand}>
                            <BrandIcon fill={highlight} height={28} />
                        </Button>

                        <Button 
                        startIcon={<CityIcon size="small" fill={fill}/>} 
                        className={cl.btnIcon}>
                            <Typography className={cl.cityText}>Delhi</Typography>
                        </Button>

                        <Button className={cl.btnIcon}
                        onClick={props.toggleFleet}>
                                <BikeIcon fill={props.showFleet ? highlight : fill}/>
                        </Button>

                        <Button className={cl.btnIcon}
                        onClick={props.toggleChargeStations}>
                            <ChargeIcon size="small" fill={props.showChargeStations ? highlight : fill} />
                        </Button>

                        <Button className={cl.btnIcon}
                        onClick={props.toggleServiceStations}>
                            <ServiceIcon size="small" fill={props.showServiceStations ? highlight : fill} />
                        </Button>

                        <Button className={cl.btnIcon}
                        onClick={props.toggleSearch}>
                            <SearchIcon size="small" fill={props.showSearch ? highlight : fill} />
                        </Button>
                    
                    </ButtonGroup>
                </Paper>
            </Toolbar>
        </AppBar>
    );
}


export default Commandbar;