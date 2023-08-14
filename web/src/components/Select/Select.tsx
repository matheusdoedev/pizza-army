import { FC } from "react";
import {
  Box,
  MenuItem,
  FormControl,
  Select,
  SelectChangeEvent,
} from "@mui/material";

import { Text } from "@/components";
import { SelectProps } from "@/interfaces";

import { theme } from "@/styles";

const SelectComponent: FC<SelectProps> = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  options,
  containerStyle,
}) => {
  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value as string);
  };

  const selectOptions = () =>
    options.map(({ label, value }) => (
      <MenuItem key={value} value={value}>
        {label}
      </MenuItem>
    ));

  return (
    <Box sx={{ minWidth: 120, ...containerStyle }}>
      <Text
        as="label"
        htmlFor={name}
        fontSize="12px"
        letterSpacing="0.18px"
        color={theme.colors.gray["400"]}
        style={{ marginLeft: "8px" }}
      >
        {label}
      </Text>
      <FormControl style={{ marginTop: "4px" }} fullWidth>
        <Select labelId={name} id={name} value={value} onChange={handleChange}>
          <MenuItem value=" " disabled>
            {placeholder}
          </MenuItem>
          {selectOptions()}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectComponent;
