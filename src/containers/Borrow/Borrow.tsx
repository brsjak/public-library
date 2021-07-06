import React, { useEffect, useState } from 'react';
import { Grid, Box, Typography, Button } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import { SelectInput, TextInput } from '../../components';
import './Borrow.scss';
import { requestBorrow } from '../../repository/borrow';
import { borrows } from '../../store/borrows.data';

export const Borrow = () => {
  const [formData, setFormData] = useState({});
  const methods = useForm({
    mode: 'onTouched',
    reValidateMode: 'onBlur',
    shouldUnregister: false,
  });

  const { register, handleSubmit, watch, getValues } = useForm();

  const submitForm: any = () => {
    const inputData = getValues();
    setFormData(inputData);
  };

  const sendData = () => {
    requestBorrow(formData);
  };

  useEffect(() => {
    if (formData) {
      sendData();
    }
  }, [formData]);

  useEffect(() => {
    console.log('BORROWS', borrows);
  }, [borrows]);
  return (
    <Box className="borrow-form-container" mt={5}>
      <FormProvider {...methods}>
        <form autoComplete="off">
          <Typography variant="h3">Borrow a book</Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextInput
                required
                label="First Name"
                inputRef={register({})}
                inputProps={{
                  name: 'firstName',
                  maxlength: '50',
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextInput
                required
                label="Last Name"
                inputRef={register({})}
                inputProps={{
                  name: 'lastName',
                  maxlength: '50',
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextInput
                required
                label="From (dd/mm/yyyy)"
                inputRef={register({})}
                inputProps={{
                  name: 'from',
                  maxlength: '50',
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextInput
                required
                label="To (dd/mm/yyyy)"
                inputRef={register({})}
                inputProps={{
                  name: 'to',
                  maxlength: '50',
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <SelectInput required name="books" label="Books" rules={{}} />
            </Grid>
          </Grid>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={submitForm}
          >
            Send Request
          </Button>
        </form>
      </FormProvider>
    </Box>
  );
};
