import React from "react";
import { IvecIcon, SearchIcon, MarkerIcon } from "../Iconic";
import {
  ButtonBase,
  Divider,
  InputBase,
  makeStyles,
  Paper
} from "@material-ui/core";
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    borderRadius: theme.spacing(1),
    "& hr": {
      margin: theme.spacing(1, 0),
      height: theme.spacing(4)
    }
  },
  grow: {
    flexGrow: 1
  },
  btnmenu: {
    padding: theme.spacing(1.5, 2)
  }
}));
const OmniSearchBar = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.root} elevation={3}>
      <ButtonBase className={classes.btnmenu} disabled>
        <IvecIcon size={24} />
      </ButtonBase>
      <InputBase
        placeholder="search fleet"
        className={classes.grow}
        autoFocus
      />
      <ButtonBase className={classes.btnmenu}>
        <SearchIcon />
      </ButtonBase>
      <Divider orientation="vertical" />
      <ButtonBase className={classes.btnmenu}>
        <MarkerIcon color="#FE5F55" />
      </ButtonBase>
    </Paper>
  );
};
export default OmniSearchBar;
