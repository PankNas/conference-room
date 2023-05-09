import React from 'react';
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

const SelectBox = ({id, label, value, items, onChange}) => (
  <FormControl style={{ width: "205px" }} required variant={'standard'}>
    <InputLabel>{label}</InputLabel>
    <Select
      value={value}
      onChange={onChange}
      name={id}
    >
      {items.map((item, index) => <MenuItem key={index} value={item}>{item}</MenuItem>)}
    </Select>
  </FormControl>
);

export default SelectBox;
