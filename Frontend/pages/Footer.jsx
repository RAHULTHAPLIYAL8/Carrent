import React from 'react'
import  Box  from '@mui/material/Box'
import  Typography from '@mui/material/Typography'
import EmailIcon from '@mui/icons-material/Email';
const Footer = () => {
  return (
   <footer>
    <Box sx={{textAlign:"center",bgcolor:"black",color:"white",p:1}}>
        <Box sx={{" & svg":{
            fontSize:"30px",
            cursor:"pointer",
        },
        "& svg:hover":{
            color:"goldenrod",
            fontSize:"30px",
            transform:'translateX(5px)',
            transition:"all 400ms"
        }}}>
        <EmailIcon/>
        </Box>
        <Typography variant="h10">All Rights Reserved &copy; Fitfood</Typography>
    </Box>
    </footer>
  )
}

export default Footer;