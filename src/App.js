import React from 'react';
import './App.css';

import { makeStyles, Container, Typography, Grid } from '@material-ui/core';

import TopMenu from '../src/Components/TopMenu';
import Banner from '../src/Components/Banner';
import Good4 from '../src/Components/Good4';
import VideoCardSmall from '../src/Components/VideoCardSmall';
import Good3 from '../src/Components/Good3';
import VideoCardLarge from '../src/Components/VideoCardLarge';
import GoodWide from '../src/Components/GoodWide';

//import BlogPost from '../src/Components/BlogPost';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  cardGrid: {
    marginTop: theme.spacing(4)
  },
  typography: {
    padding: theme.spacing(2),
  },
  footer: {
    color: 'green'
  }
}));

const cards = [1, 2, 3];

const img1 = "/images/1.jpeg";
const img2 = "/images/2.jpg";
const img3 = "/images/3.jpg";
const img4 = "/images/4.png";
const img5 = "/images/5.png";
const img6 = "/images/6.jpeg";
const img7 = "/images/7.png";
const img8 = "/images/8.jpeg";
const img9 = "/images/9.jpeg";

const title1 = "Солнцезащитный крем SPF-30 с тоном или без";
const title2 = "Увлажняющий крем SPF-15 для жирной кожи";
const title5 = "Очищающий гель для жирной кожи";
const title6 = "Очищающий гель для нормальной и сухой кожи";
const title7 = "Тонизирующий лосьон для нормальной и сухой кожи";
const title8 = "Крем Omega 3+6 с подтягивающим эффектом";
const title9 = "Сыворотка с витамином C";
const title10 = "Крем - лифтинг с витамином C";
const title11 = "Восстанавливающий крем вокруг глаз";

function App() {

  const classes = useStyles();
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  }

  return (<>
    <TopMenu />
    <main>
      <Banner/>
      <Container className={classes.cardGrid} maxWidth="lg">
        <Grid container spacing={4}>
          <Good4 img={img1} title={title11} />
          <Good4 img={img2} title={title9} />
          <Good4 img={img3} title={title1} />
          <Good4 img={img4} title={title2} />
        </Grid>
      </Container>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          <VideoCardSmall />
          <VideoCardSmall />
        </Grid>
      </Container>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          <Good3 img={img5} title={title6} />
          <Good3 img={img6} title={title5} />
          <Good3 img={img7} title={title7} />
        </Grid>
      </Container>
      <Container className={classes.cardGrid} maxWidth="lg">
        <Grid container spacing={6}>
          <VideoCardLarge />
          <VideoCardLarge />
        </Grid>
      </Container>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={2}>
          <GoodWide img={img8} title={title8} />
          <GoodWide img={img9} title={title10} />
        </Grid>
      </Container>
      {/*
      <Container className={classes.cardGrid} maxWidth="lg">
      <Grid container spacing={2}>
      <BlogPost/>
      <BlogPost/>
      </Grid>
      </Container>
*/}
    </main>
    <footer>
      <Typography className={classes.footer} align="center" variant="subtitle1">
        Профессиональная космецевтика ONmacabim, Караганда 2010 - 2021
      </Typography>
    </footer>
  </>
  );
}

export default App;