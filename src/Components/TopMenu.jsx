import React from 'react';
import { makeStyles, DialogTitle, DialogContentText, DialogContent, DialogActions, Dialog, TextField, AppBar, Container, Toolbar, Typography, Button, Box } from '@material-ui/core';
import WhatsappPopover from "../Components/WhatsappPopover";
import InstaPopoverIrina from "../Components/InstaPopoverIrina";
import PhoneCallbackIcon from '@material-ui/icons/PhoneCallback';
//import InstaPopoverShop from "../src/Components/InstaPopoverShop";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    color: 'green',
    fontWeight: 'bold'
  },
  typography: {
    padding: theme.spacing(2),
  },
  contacts: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green'
  }
}));

export default function TopMenu(props) {
  const classes = useStyles();

  return (
    <AppBar color='' position='fixed'>
      <Container fixed>
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            ONmacabim
          </Typography>
          
        </Toolbar>
        <Box>
            <span className={classes.contacts}>Обучение косметологов в Караганде:</span>
            <Button>
              <InstaPopoverIrina />
            </Button>
            <Button>
              <WhatsappPopover />
            </Button>
            <Button className={classes.contacts}>
              <PhoneCallbackIcon /> <span>8-(701)-356-27-76</span>
            </Button>
          </Box>
      </Container>
    </AppBar>
  );
}