import React from 'react';
import { makeStyles, Container, Typography, Paper, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  mainFeaturesPost: {
    position: "relative",
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: "cover",
    backgroundRepeat: "norepeat",
    backgroundPosition: "center"
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundOverlay: "rgba(0,0,0,.3)"
  },
  mainFeaturesPostContent: {
    position: "relative",
    padding: theme.spacing(6),
    marginTop: theme.spacing(6),
    color: theme.palette.common.white,
    fontWeight: 'bold',
    fontSize: 50,
    backgroundColor: 'gray',
    backgroundColor: "rgba(0, 0, 0, 0.1)"
  },
  typography: {
    padding: theme.spacing(2),
  }
}));

function Banner(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.mainFeaturesPost}
        style={{
          backgroundImage: "url('/images/banner.jpeg')"
        }}>
        <Container fixed>
          <div className={classes.overlay} />
          <Grid container>
            <Grid item md={6} lg={6}>
              <div className={classes.mainFeaturesPostContent}>
                <Typography className={classes.mainFeaturesPostContent}>
                  Профессиональная космецевтика ONmacabim
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Paper>
  );
}

export default Banner;