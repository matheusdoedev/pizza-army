import { FC } from "react";
import { Box, TextField } from "@mui/material";
import { styled } from "styled-components";

import { Text } from "@/components";
import { InputProps } from "@/interfaces";

import { theme } from "@/styles";

const Input: FC<InputProps> = ({
  type = "text",
  label,
  name,
  value,
  onChange,
  error,
  placeholder,
  multiline,
  rows,
  containerStyle,
}) => {
  const textColor = error ? theme.colors.red : theme.colors.gray["400"];

  return (
    <Box
      component="div"
      sx={{
        minWidth: 120,
        display: "flex",
        flexDirection: "column",
        ...containerStyle,
      }}
    >
      <InputHead>
        <Text
          as="label"
          htmlFor={name}
          fontSize="12px"
          letterSpacing="0.18px"
          color={textColor}
          style={{ marginLeft: "8px" }}
        >
          {label}
        </Text>
        {error && (
          <Text as="span" fontSize="10px" color={theme.colors.red}>
            {error}
          </Text>
        )}
      </InputHead>
      <TextField
        type={type}
        name={name}
        id={name}
        value={value}
        multiline={multiline}
        placeholder={placeholder}
        error={!!error}
        rows={rows}
        onChange={onChange}
        variant="outlined"
      />
    </Box>
  );
};

const InputHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
`;

export default Input;
