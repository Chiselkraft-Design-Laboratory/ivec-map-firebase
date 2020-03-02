import React from "react";
import { ZoomFitIcon, ZoomOutIcon, ZoomInIcon } from "../Iconic";
import { makeStyles, ButtonGroup, Button, Paper } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    position: "fixed",
    bottom: 0,
    right: 0,
    margin: theme.spacing(0, 2.5, 2.5, 0)
  },
  btn: { padding: theme.spacing(1, 0.5) }
}));

const OmniZoomControl = props => {
  const classes = useStyles();

  return (
    <Paper elevation={8} className={classes.root}>
      <ButtonGroup orientation="vertical" variant="text" size="small">
        <Button className={classes.btn}>
          <ZoomFitIcon size={24} />
        </Button>
        <Button className={classes.btn}>
          <ZoomInIcon size={24} />
        </Button>
        <Button className={classes.btn}>
          <ZoomOutIcon size={24} />
        </Button>
      </ButtonGroup>
    </Paper>
  );
};

export default OmniZoomControl;
