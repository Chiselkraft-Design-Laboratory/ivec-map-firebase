import React from 'react';
import { Toolbar, Button, ButtonGroup, Typography, makeStyles, } from '@material-ui/core';

const useStyles = makeStyles(theme => ({

}));

const Commandbar = (props) => {
    return (
        <Toolbar>
            <ButtonGroup
                variant="contained"
                size="large"
            >
                <Button>
                    <Typography>Delhi</Typography>
                </Button>
                <Button>Fl</Button>
                <Button>Chrg</Button>
                <Button>Srv</Button>
                <Button>Search</Button>
            </ButtonGroup>
        </Toolbar>
    );
}

const ZoomControl = (props) => {
    const cl = useStyles();
    return (
        <Toolbar>
        <ButtonGroup
            variant="contained"
            orientation="vertical"
            >
            <Button>Z</Button>
            <Button>+</Button>
            <Button>-</Button>
        </ButtonGroup>
        </Toolbar>
    );
}

const Brand = () => {
    return (
        <Button variant="contained" size="large">
            IVEC CONSOLE
        </Button>
    );
}

export { Brand, Commandbar, ZoomControl };