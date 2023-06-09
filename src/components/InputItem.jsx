import React from 'react';
import TextField from "@mui/material/TextField";
import InputMask from 'react-input-mask';
import styles from './style.css';

const InputItem = ({id, mask, label, value, onChange}) => {
  const textField = () => <TextField id={id} label={label} className={styles.itemForm} required/>;

  return (
    <InputMask
      mask={mask}
      value={value}
      maskChar="_"
      onChange={onChange}
    >
      {textField}
    </InputMask>
  )
};

export default InputItem;


