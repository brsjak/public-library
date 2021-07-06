import React from 'react';

import { Box, Grid, Typography } from '@material-ui/core';

import './BooksTable.scss';
import { BooksTableItem } from '..';
import { books } from '../../store/books.data';

export const BooksTable = (props: any) => {
  return (
    <Box className="table-container">
      <Grid container>
        <Grid item xs={3}>
          <Box>
            <Typography variant="h5" className="table-header-item">
              Book Title
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box className="table-header-item">
            <Typography variant="h5">Author</Typography>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box className="table-header-item">
            <Typography variant="h5">Publisher</Typography>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box className="table-header-item">
            <Typography variant="h5">YOP</Typography>
          </Box>
        </Grid>

        {books.map((book, index) => {
          return (
            <BooksTableItem
              key={index}
              title={book.title}
              author={book.author}
              publisher={book.publisher}
              published={book.published.slice(0, 4)}
            />
          );
        })}
      </Grid>
    </Box>
  );
};
