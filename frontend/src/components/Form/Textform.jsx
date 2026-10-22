import TextField from "@mui/material/TextField";

const Textform = ({ label,name,onChange,onBlur,value,error,helperText }) => {
  return (
    <TextField
      id="outlined-basic"
      label={label}
      sx={{ width: "100%" }}
      variant="outlined"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      name={name}
      error={error}
      helperText={helperText} 
    />
  );
};

export default Textform;
