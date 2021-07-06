import { Box, Grid, Typography } from '@material-ui/core';
import React from 'react';
import './BooksTableItem.scss';

interface IBooksTableItem {
  title: string;
  author: string;
  publisher: string;
  published: string;
}

export const BooksTableItem = (props: IBooksTableItem) => {
  return (
    <Grid container>
      <Grid item xs={3}>
        <Box>
          <Typography variant="h5" className="table-header-item">
            {props.title}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box>
          <Typography variant="h5" className="table-header-item">
            {props.author}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box>
          <Typography variant="h5" className="table-header-item">
            {props.publisher}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box>
          <Typography variant="h5" className="table-header-item">
            {props.published}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};
