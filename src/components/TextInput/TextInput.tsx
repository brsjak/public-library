import { InputLabel, OutlinedInput } from '@material-ui/core';
import React from 'react';

type TextInputProps = {
  required?: boolean;
  label: string;
  error?: any;
  inputRef?: any;
  inputProps: any;
  name?: string;
};

export const TextInput: React.FC<TextInputProps> = (props: any) => {
  const { required, label, error, inputRef, inputProps, ...other } = props;
  let name = inputProps.name;
  return (
    <div className="text-input-container">
      <InputLabel required={required ? required : false}>{label}</InputLabel>
      <OutlinedInput
        name={name}
        error={error && error[name]}
        fullWidth={true}
        autoComplete="off"
        inputRef={inputRef ? inputRef : ''}
        inputProps={inputProps}
        {...other}
      ></OutlinedInput>
    </div>
  );
};
