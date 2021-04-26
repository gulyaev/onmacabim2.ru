import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Button, Grid, Card, CardMedia, CardContent, CardActions } from '@material-ui/core';

import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import LayerIcon from '@material-ui/icons/Layers';

// We can inject some CSS into the DOM.
const styles = {
  root: {
    background: 'white',
    borderRadius: 5,
    border: 5,
    color: 'black',
    height: 450,
    padding: '10px 30px',
    boxShadow: '0 3px 5px 2px gray',
  },

  cardMedia: {
    height: 50,
    paddingTop: "90.25%"
  },
};

function ClassNames(props) {
  const { classes, children, className, ...other } = props;

  return (
    <Grid item xs={12} sm={6} md={4}>

              <Card className={clsx(classes.root, className)} {...other}>
                <CardMedia
                  className={clsx(classes.cardMedia, className)} {...other}
                  image="/images/good.jpeg"
                  title="Image Title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography
                    variant="h7"
                    gutterBottom>
                    ONmacabim DM Увлажняющий крем для жирной кожи лица SPF 15
                  </Typography>
                  <Typography>
                  3 500 тг
                  </Typography>
                </CardContent>
                <CardActions>
                
                <PlayCircleFilledIcon />
                  <Button size="small" color="primary">Посмотреть</Button>
                  <LayerIcon />
                  <Button size="small" color="primary">Купить</Button>
                </CardActions>
              </Card>

            </Grid>
  );
}

ClassNames.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default withStyles(styles)(ClassNames);