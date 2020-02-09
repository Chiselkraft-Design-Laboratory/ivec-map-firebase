import React from 'react';
import { Drawer, Toolbar, IconButton } from '@material-ui/core';
import {
    PinIcon,
    DotMenuIcon,
    DockLeftIcon,
    DockRightIcon,
    DockBottomIcon,
    MoonIcon,
    SunIcon
} from './Icons';

const DataView = (props) => {
    return (
        <Drawer
            variant="persistent"
            open={props.open}
            anchor={props.options.Dock}
        >
            <Toolbar>
                <IconButton><PinIcon /></IconButton>
                <IconButton><DockLeftIcon /></IconButton>
                <IconButton><DockRightIcon /></IconButton>
                <IconButton><DockBottomIcon /></IconButton>
                <IconButton><SunIcon /></IconButton>
                <IconButton><MoonIcon /></IconButton>
                <IconButton><DotMenuIcon /></IconButton>
            </Toolbar>
            <Toolbar>
                {props.children}
            </Toolbar>
        </Drawer>
    );
}

export default DataView;