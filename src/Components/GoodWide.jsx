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
  }
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
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
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