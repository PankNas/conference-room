import React from 'react';
import styles from './style.css';
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

const SelectBox = ({id, label, value, items, onChange}) => (
  <FormControl id={id} className={styles.itemForm} variant={'standard'}>
    <InputLabel className={styles.itemForm}>{label}</InputLabel>
    <Select
      value={value}
      onChange={onChange}
      className={styles.itemForm}
    >
      {items.map((item, index) => <MenuItem key={index} value={item}>{item}</MenuItem>)}
    </Select>
  </FormControl>
);

export default SelectBox;
