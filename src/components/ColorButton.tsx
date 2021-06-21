import React from 'react';
import {
  createStyles,
  withStyles,
  makeStyles,
  Theme,
} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { yellow } from '@material-ui/core/colors';

const ColorButton = withStyles((theme: Theme) => ({
  root: {
    color: theme.palette.getContrastText(yellow[700]),
    backgroundColor: yellow[700],
    '&:hover': {
      backgroundColor: yellow[800],
    },
  },
}))(Button);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(6),
    },
  }),
);

export default function CustomizedButton(props) {
  const classes = useStyles();

  return (
    <div>
      <ColorButton variant="contained" color="primary" className={classes.margin} onClick={props.socialLogin}>
        Sign In with Kakao
      </ColorButton>
    </div>
  );
}