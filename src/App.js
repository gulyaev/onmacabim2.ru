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

const video1 = "H4ksn1-UwmM";
const video2 = "jOH59msf6xA";
const video3 = "Tcl34fwLV-M";
const video4 = "zvwQvXpspx0";

const videoName1 = "ONmacabim DM очищающий гель для умывания";
const videoName2 = "Сыворотка с витамином C ONmacabim";
const videoName3 = "SPF 30 Крем с тональным эффектом onmacabim";
const videoName4 = "Тонизирующий лосьон NR onmacabim";

const date1 = "19 мая 2021";
const date2 = "19 мая 2021";
const date3 = "20 мая 2021";
const date4 = "20 мая 2021";

const title1 = "Солнцезащитный крем SPF-30 с тоном или без";
const title2 = "Увлажняющий крем SPF-15 для жирной кожи";
const title5 = "Очищающий гель для жирной кожи";
const title6 = "Очищающий гель для нормальной и сухой кожи";
const title7 = "Тонизирующий лосьон для нормальной и сухой кожи";
const title8 = "Крем Omega 3+6 с подтягивающим эффектом";
const title9 = "Сыворотка с витамином C";
const title10 = "Крем - лифтинг с витамином C";
const title11 = "Восстанавливающий крем вокруг глаз";

const price1 = "16 100 тг";
const price2 = "15 800 тг";
const price3 = "11 100 тг";
const price4 = "15 400 тг";
const price5 = "9 800 тг";
const price6 = "9 800 тг";
const price7 = "9 800 тг";
const price8 = "17 000 тг";
const price9 = "17 000 тг";

const description1 = "ONmacabim DM очищающий гель для умывания предназначен для жирной проблемной себорейной кожи. В его составе имеется кровавый бессмертник - это природный антибиотик, он обладает антисептическим, противовоспалительным, бактерицидным действием. Гель тщательно счищает все загрязнения с поверхности кожи при этом не пересушивая и не изменяя  PH. Рекомендуется применение утром и вечером."
const description2 = "Сыворотка с витамином C ONmacabim обладает дезинтаксикационным, осветляющим, регенерирующим действием, также увлажняет и очень хорошо действует на стенки капилляров, укрепляя их и препятствуя расширению, то есть борется с куперозом. Эта сыворотка очень хорошо подходит как основа под макияж. Она делает кожу шелковистой, гладкой, мягкой и обладает прекрасным ароматом."
const description3 = "Наступает лето, жаркая пора и мы хотим предложить крем с тональным эффектом SPF-30 sunblock, который защищает кожу от ультрафиолетового излучения, борется со свободными радикалами, хорошо впитывается, увлажняет кожу, не забивает поры, не оставляет жирного блеска, легкий, хорошо увлажняющий и тонирующий крем."
const description4 = "Тонизирующий лосьон из серии NR onmacabim. Этот тонизирующий лосьон используется 2 раза в день утром и вечером на завершении этапа очищения, он подготавливает кожу к дальнейшим этапам ухода, увлажняет хорошо, тонизирует, выравнивает PH, подходит для сухой, чувствительной, обезвоженной кожи, не содержит спирта, рекомендую применять утром и вечером."
const description5 = "Активное восстановление барьерных функций кожи. Компоненты крема способны глубоко проникать в эпидермис, снимая стянутость и раздражение даже у сильно обезвоженной и шелушащейся кожи."
const description6 = "Оказывает антиоксидантное, противовоспалительное, депигментирующее, тонизирующее и иммуномоделирующее действи, укрепляет стенки капилляров, улучшает эластичность сосудов."

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
          <Good4 img={img1} title={title11} price={price1}/>
          <Good4 img={img2} title={title9} price={price2}/>
          <Good4 img={img3} title={title1} price={price3}/>
          <Good4 img={img4} title={title2} price={price4}/>
        </Grid>
      </Container>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          <VideoCardSmall video={video1} title={videoName1} date={date1} description={description1}/>
          <VideoCardSmall video={video2} title={videoName2} date={date2} description={description2}/>
        </Grid>
      </Container>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          <Good3 img={img5} title={title6} price={price5}/>
          <Good3 img={img6} title={title5} price={price6}/>
          <Good3 img={img7} title={title7} price={price7}/>
        </Grid>
      </Container>
      <Container className={classes.cardGrid} maxWidth="lg">
        <Grid container spacing={4}>
        <VideoCardSmall video={video3} title={videoName3} date={date3} description={description3}/>
        <VideoCardSmall video={video4} title={videoName4} date={date4} description={description4}/>
        </Grid>
      </Container>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={2}>
          <GoodWide img={img8} title={title8} price={price8} description={description5}/>
          <GoodWide img={img9} title={title10} price={price9} description={description6}/>
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