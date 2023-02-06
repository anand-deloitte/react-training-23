import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';

import FeaturedPost from './FeaturedPost';
import Sidebar from './Sidebar';
import Footer from './Footer';


const featuredPosts = [
  {
    title: 'TITLE HEADING',
    date: 'Nov 12',
    description:
      'Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut xxxxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxx xxxxxxxxxxx  xxxxxxxxxxxx xxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxx  ssss ssssssssssssssssssssssssssssss sssssssss ssssssssssssssssssssssssssss sssssssssssssss ccccccccs ssssssssssssssss ssssssssssssssss ssssssssssssssssssssssssssssssssss sssssssssssssssssssssssssssssssssss ssssssssssss sssssssssssxxxx',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
    xs:7,
    md:10,
    imgLink: "https://www.w3schools.com/w3images/woods.jpg",
  },
  {
    title: 'Name',
    date: 'June 17',
    description:
      'Just me, myself and I, exploring the universe of uknownment. ',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
    xs:5,
    md:6,
    imgLink: "https://www.w3schools.com/w3images/avatar_g.jpg",
  },
  {
    title: 'BLOG ENTRY',
    date: 'Nov 12',
    description:
      'Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
    xs:7,
    md:10,
    imgLink: "https://www.w3schools.com/w3images/bridge.jpg",
  }
];


const sidebar = {
  title: 'Popular Posts',
  description:
    'Popular Posts',
  archives: [
    { title: 'Lorem', url: '#' , img:"https://www.w3schools.com/w3images/workshop.jpg"},
    { title: 'Ispum', url: '#', img: "https://www.w3schools.com/w3images/gondol.jpg" },
    { title: 'Dorum', url: '#',img: "https://www.w3schools.com/w3images/skies.jpg"},
    { title: 'Mingsum', url: '#',img: "https://www.w3schools.com/w3images/rock.jpg" }
  ]
};

const theme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="My Blog" />
        <main>
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
            />
          </Grid>
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}