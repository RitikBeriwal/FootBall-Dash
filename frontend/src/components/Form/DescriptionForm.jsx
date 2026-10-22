import * as React from "react";
import TextField from "@mui/material/TextField";

export default function DescriptionForm({
  label,
  rows,
  name,
  onChange,
  onBlur,
  value,
  error,helperText
}) {
  return (
    <TextField
      sx={{ width: "100%" }}
      label={label}
      rows={rows}
      multiline
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      name={name}
      error={error}
      helperText={helperText} 
    />
  );
}
