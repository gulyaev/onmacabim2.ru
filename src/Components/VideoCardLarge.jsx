import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Button, Grid, Card, CardMedia, CardContent, CardActions } from '@material-ui/core';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import LayerIcon from '@material-ui/icons/Layers';

import Video from './Video';

// We can inject some CSS into the DOM.
const styles = {
  root: {
    background: 'white',
    borderRadius: 5,
    border: 5,
    color: 'black',
    height: 350,
    width: 600,
    padding: '10px 30px',
    boxShadow: '0 3px 5px 2px gray',
    fontSize: 15
  },
  cardDiv: {
    height: 'auto',
    width: 600
  },
  cardTitle: {
    color: 'green'
  }
  /*cardMedia: {
    height: '100%',
    width: 'auto',
    */
};

function VideoCardLarge(props) {
  const { classes, children, className, ...other } = props;

  return (
    <Grid item xs={12} sm={6} md={4} lg={6}>
      <Card className={classes.cardDiv}>
        <Video />
        <CardContent className={classes.cardContent}>
          <Typography className={classes.cardTitle}
            variant="h5"
            gutterBottom>
            Вот Вы создали
          </Typography>
          <Typography>
          Вот Вы создали. Вот Вы создали. Вот Вы создали.Вот Вы создали. Вот Вы создали. Вот Вы создали.
                  </Typography>
        </CardContent>
{/*
        <CardActions>
          <Button size="small" color="primary">View</Button>
          <Button size="small" color="primary">Edit</Button>
          <LayerIcon />
          <PlayCircleFilledIcon />
        </CardActions>
*/}
      </Card>
    </Grid>
  );
}
VideoCardLarge.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default withStyles(styles)(VideoCardLarge);