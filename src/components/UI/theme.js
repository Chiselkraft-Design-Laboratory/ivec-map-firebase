import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { grey, deepOrange, teal } from '@material-ui/core/colors';

const theme = createMuiTheme();

const Theme = (props) => {
    const darktheme = createMuiTheme({
        palette: {
            type: 'dark',
        }
    });
    const lighttheme = createMuiTheme({
        palette: {
            type: 'light',

            secondary: {
                main: '#B8B8BD'
            },
            success: {
                main: teal['A200']
            }
        },
        overrides: {
            MuiAppBar: {
                root: {
                    paddingTop: theme.spacing(3),
                    background: 'transparent !important',
                },
            },
            MuiButtonGroup: {
                groupedContainedHorizontal: {
                    '&:not(:last-child)': {
                        borderRight: 'none',
                        '&$disabled': {
                            borderRight: '1px solid #60616C'
                        }
                    },
                },
                groupedContainedVertical: {
                    '&:not(:last-child)': {
                        borderBottom: '1px solid #60616C',
                    }
                }
            },
            MuiButton: {
                contained: {
                    color: '#B8B8BD',
                    backgroundColor: '#3D3E4C',
                    '&$disabled': {
                        backgroundColor: '#3D3E4C'
                    },
                    '&:hover': {
                        backgroundColor: '#4E4F5C'
                    }
                }
            }
        },
    });

    return (
        <ThemeProvider theme={props.darkmode ? darktheme : lighttheme}>
            {props.children}
        </ThemeProvider>
    );
}

export default Theme;