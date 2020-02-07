import React from 'react';
import { Drawer, Toolbar, IconButton } from '@material-ui/core';

const DataView = (props) => {
    return (
        <Drawer
            variant="persistent"
            open={props.open}
            anchor={props.options.Dock}
        >
            <Toolbar>
                <IconButton>P</IconButton>
                <IconButton>:</IconButton>
            </Toolbar>
            <Toolbar>
                {props.children}
            </Toolbar>
        </Drawer>
    );
}

export default DataView;