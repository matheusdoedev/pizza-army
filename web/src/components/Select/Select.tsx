import { FC } from "react";
import { styled } from "styled-components";
import {
  Box,
  MenuItem,
  FormControl,
  Select,
  SelectChangeEvent,
  SxProps,
  Theme,
} from "@mui/material";

import { Text } from "@/components";
import { SelectOption } from "@/interfaces";

import { theme } from "@/styles";

interface SelectProps {
  label: string;
  name: string;
  value: string;
  containerStyle?: SxProps<Theme>;
  options: SelectOption[];
  onChange: (value: string) => void;
}

const SelectComponent: FC<SelectProps> = ({
  label,
  name,
  value,
  onChange,
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
      <FormControlStyled style={{ marginTop: "4px" }} fullWidth>
        <Select labelId={name} id={name} value={value} onChange={handleChange}>
          <MenuItem value=" " disabled>
            Selecione uma opção
          </MenuItem>
          {selectOptions()}
        </Select>
      </FormControlStyled>
    </Box>
  );
};

const FormControlStyled = styled(FormControl)`
  .MuiOutlinedInput-notchedOutline {
    border-color: ${({ theme }) => theme.colors.gray["400"]};
  }

  .Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: ${({ theme }) => theme.colors.primary} !important;
  }
`;

export default SelectComponent;
