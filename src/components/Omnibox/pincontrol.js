import React from "react";
import {
  CityIcon,
  ServiceIcon,
  ChargeIcon,
  ScooterIcon,
  DownArrowIcon
} from "../Iconic";
import {
  Divider,
  ButtonBase,
  Paper,
  Toolbar,
  Typography,
  makeStyles
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    borderRadius: theme.spacing(1),
    "& >:first-child": {
      padding: theme.spacing(2, 1.5),
      display: "flex",
      justifyContent: "space-around",
      alignItems: "flex-start"
    },
    "& >:last-child": {}
  },
  btncard: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    borderRadius: theme.spacing(1),
    paddingBottom: theme.spacing(1.5),
    "&:hover": {
      backgroundColor: theme.palette.action.hover
    },
    "& svg": {
      margin: theme.spacing(1.5, 2.5)
    },
    "& span": {}
  },
  btnexpand: {
    width: "100%",
    display: "flex",
    flexWrap: "nowrap",
    alignItems: "center",
    paddingRight: theme.spacing(8),
    "& svg": {
      margin: theme.spacing(1.5, 3, 1.5, 2)
    },
    "& span": {
      flexGrow: 1,
      display: "block",
      justifyContent: "center"
    }
  }
}));
const OmniPinControl = props => {
  const classes = useStyles();
  return (
    <Paper elevation={3} className={classes.root}>
      <Toolbar>
        <ButtonBase className={classes.btncard}>
          <CityIcon size={48} className={classes.icon} />
          <Typography variant="caption">City</Typography>
        </ButtonBase>
        <ButtonBase className={classes.btncard}>
          <ServiceIcon size={48} className={classes.icon} />
          <Typography variant="caption">Service</Typography>
        </ButtonBase>
        <ButtonBase className={classes.btncard}>
          <ChargeIcon size={48} className={classes.icon} />
          <Typography variant="caption">Charge</Typography>
        </ButtonBase>
        <ButtonBase className={classes.btncard}>
          <ScooterIcon size={48} className={classes.icon} />
          <Typography variant="caption">Fleet</Typography>
        </ButtonBase>
      </Toolbar>
      <Divider />
      <Toolbar variant="dense" disableGutters>
        <ButtonBase className={classes.btnexpand}>
          <DownArrowIcon />
          <Typography variant="caption">more options</Typography>
        </ButtonBase>
      </Toolbar>
    </Paper>
  );
};

export default OmniPinControl;
