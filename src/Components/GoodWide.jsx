import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Grid, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 225,
  },
  cardTitle: {
    color: 'green'
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black'
  },
  description: {
    marginBottom: '20px'
  },
});

export default function GoodWide(props) {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={6} lg={6}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.img}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography className={classes.cardTitle} gutterBottom variant="h5" component="h2">
              {props.title}
            </Typography>
            <Typography className={classes.description} variant="body2" color="textSecondary" component="p">
              {props.description}
          </Typography>
          <Typography className={classes.price}>
            {props.price}
          </Typography>
          </CardContent>
        </CardActionArea>
{/*
        <CardActions>
          <Button size="small" color="primary">
            Share
        </Button>
          <Button size="small" color="primary">
            Learn More
        </Button>
        </CardActions>
*/}
      </Card>
    </Grid>
  );
}