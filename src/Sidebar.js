import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';

function Sidebar(props) {
  const { archives, description, title } = props;

  return (
    <Grid item xs={12} md={4}>
      <Paper elevation={0} sx={{ p: 2, bgcolor: 'grey.200' }}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        {archives.map((archive) => (
        <CardActionArea component="a" href="#">
                  <Card sx={{ display: 'flex' }}>
                  <CardMedia
            component="img"
            sx={{ width: 50, display: { xs: 'none', sm: 'block' } }}
            image={archive.img}
          />
          {archive.title}
        </Card>
        </CardActionArea>
      ))}
      </Paper>
    </Grid>
  );
}

Sidebar.propTypes = {
  archives: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default Sidebar;
