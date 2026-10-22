import { Box, Typography } from "@mui/material";

const MyMessage = ({Messagetext,messageColor}) => {
  return (
    <Box   sx={{
    width:"100%",
    alignItems:"center",
    height:"30px",
    padding:"10px",
    color:messageColor,
    marginBottom:"20px",
    display:"flex"
  }}>
<Typography>{Messagetext}</Typography>
      
    </Box>
  )
}

export default MyMessage
