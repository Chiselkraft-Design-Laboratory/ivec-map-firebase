import React from 'react';
import { MinusIcon, PlusIcon, ZoomIcon } from '../Icons';
import {
    Grid, Toolbar, Paper, Button, ButtonGroup, useTheme, makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    btnZoom: {
        padding: theme.spacing(1),
    },
    grid: {
        height: '100vh',
        paddingBottom: theme.spacing(3)
    }
})); 

const ZoomControl = (props) => {
    const cl = useStyles();
    const fill = useTheme().palette.secondary.main;
    
    return (
        <Grid
            container
            component="footer" 
            direction="column"
            justify="flex-end"
            alignItems="flex-end"
            className={cl.grid}
        >
            <Toolbar>
                <Paper elevation={12}>
                    <ButtonGroup
                        orientation="vertical"
                        variant="contained"
                    >
                    
                        <Button className={cl.btnZoom}
                        onClick={props.onFitExtent}>
                            <ZoomIcon fill={fill} />
                        </Button>
                        <Button className={cl.btnZoom} 
                        onClick={props.onZoomIn} >
                            <PlusIcon fill={fill} />
                        </Button>
                        <Button className={cl.btnZoom}
                        onClick={props.onZoomOut} >
                            <MinusIcon fill={fill} />
                        </Button>
                
                    </ButtonGroup>
                </Paper>
            </Toolbar>
        </Grid>
    );
}

export default ZoomControl;