import React from 'react';
//import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
//import { red, blue } from 'material-ui/colors';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import WhatsAppIcon from '@material-ui/icons/WhatsApp';

//const redTheme = createMuiTheme({ palette: { primary: red } })
//const blueTheme = createMuiTheme({ palette: { primary: blue } })

const theme = createMuiTheme({
    button: {
      fontSize: '1rem',
      color: 'green'
    },
});
/*
const useStyles = makeStyles((theme) => ({
    typography: {
      padding: theme.spacing(2),
    },
    button: {
      color: `#388e3c`,
    }
  }));
*/
function WhatsappPopover() {
    //const classes = useStyles();
    const classes = createMuiTheme;
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
        <Button className={classes.button} aria-describedby={id} variant="contained" color="" onClick={handleClick}>
          <WhatsAppIcon/>
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
            <a href="whatsapp://send/?phone=77013562776" title="WhatsApp: 77013562776">
              Написать в Whatsapp
            </a>
          </Typography>
        </Popover>
      </div>
    );
  }

  export default WhatsappPopover;