import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { InputLabel, MenuItem, Select } from '@material-ui/core';
import { books } from '../../store/books.data';
import './SelectInput.scss';

type SelectInputProps = {
  required?: boolean;
  label: string;
  error?: any;
  inputRef?: any;
  inputProps?: any;
  name: string;
  onChange?: any;
  rules?: any;
};

export const SelectInput: React.FC<SelectInputProps> = (props: any) => {
  const {
    required = false,
    label,
    error,
    name,
    onChange: handleChange,
    rules,
  } = props;
  const { control } = useFormContext();

  return (
    <div className="select-input-container">
      <InputLabel
        required={required ? required : false}
        disableAnimation={true}
      >
        {label}
      </InputLabel>
      <Controller
        name={name}
        control={control}
        rules={rules || { required: required && 'Required field!' }}
        render={({ onChange, onBlur, value, name }) => (
          <Select
            name={name}
            value={value}
            onChange={(e: any) => {
              onChange(e.target?.value);
              if (!!handleChange) {
                handleChange(e.target?.value);
              }
            }}
            onBlur={onBlur}
            variant="outlined"
            fullWidth={true}
            error={error && error[name]}
          >
            {books.length > 0
              ? books.map((book: any) => {
                  return (
                    <MenuItem value={book.isbn} key={book.isbn}>
                      {book.title}
                    </MenuItem>
                  );
                })
              : null}
          </Select>
        )}
      />
    </div>
  );
};
