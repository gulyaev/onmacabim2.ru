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
    height: 350,
    width: 200,
    padding: '10px 30px',
    boxShadow: '0 3px 5px 2px gray',
    fontSize: 15
  },
  cardDiv: {
    height: 250,
    width: 200,
    paddingTop: "-50%",
    paddingRight: "20%",
    paddingBottom: "-50%",
    paddingLeft: "0%",
    objectFit: 'cover'
  },
  cardMedia: {
    height: '100%',
    width: 'auto'
  },
  price: {
    fontSize: 15
  },
  cardContent: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'green',
  }
};

function Good3(props) {
  const { classes, children, className, ...other } = props;

  return (
    <Grid item xs={12} sm={6} md={4} lg={4}>

      <Card className={clsx(classes.root, className)} {...other}>
        <div className={classes.cardDiv}>
          <CardMedia
            className={clsx(classes.cardMedia, className)} {...other}
            image={props.img}
            title="Image Title"
          />
        </div>

        <CardContent className={classes.cardContent}>
          <Typography
            variant="h7"
            gutterBottom>
            {props.title}
                  </Typography>
          <Typography className={classes.price}>
            {/*3 500 тг*/}
                  </Typography>
        </CardContent>
{/*
        <CardActions>
          <PlayCircleFilledIcon />
          <Button size="small" color="primary">Посмотреть</Button>
          <LayerIcon />
          <Button size="small" color="primary">Купить</Button>
        </CardActions>
*/}
      </Card>

    </Grid>
  );
}

Good3.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default withStyles(styles)(Good3);