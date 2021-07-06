import { Container } from '@material-ui/core';
import React from 'react';
import { BooksTable } from '../../components/BooksTable/BooksTable';

import './Books.scss';

export const Books = (props: any) => {
  return (
    <Container>
      <BooksTable />
    </Container>
  );
};
