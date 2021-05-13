import React from 'react';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles(
  (theme) => ({
    typography: {
      padding: theme.spacing(2),
    },
    button: {
      color: `#f44336`,
    }
  }));

function InstaPopoverIrina() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
  
    return (
      <div>
        <Button className={classes.button} aria-describedby={id} variant="contained" color="#4caf50" onClick={handleClick}>
          <InstagramIcon/>
        </Button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <Typography className={classes.typography}>
            <a href="https://instagram.com/zagrebina_cosmetics" title="">
               Написать в инстаграм
            </a>
          </Typography>
        </Popover>
      </div>
    );
  }

  export default InstaPopoverIrina;