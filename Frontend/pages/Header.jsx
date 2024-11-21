import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import {NavLink} from 'react-router-dom'
import "./Header.css"
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  //handle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }
  //menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography color="goldenrod" variant='h6' component={"div"} sx={{ flexGrow: 1 }}>
        <FastfoodIcon sx={{ fontSize: "30px" }} />
        My restaurant</Typography>
      <ul className='mobile-navigation'>
        <li>
        <NavLink activeClassName="active"  to={"/Home"}>Home</NavLink>
        </li>
        <li>
        <NavLink activeClassName="active" to={"/Contact"}>About</NavLink>
        </li>
        <li>
        <NavLink activeClassName="active" to={"/About"}>Contact</NavLink>
        </li>
        <li>
        <NavLink activeClassName="active"to={"/menu"}>Menu</NavLink>
        </li>
        <li>
        <NavLink activeClassName="active"to={"/Cart"}><ShoppingCartIcon/>{allcart.length}</NavLink>
        </li>
        
      </ul>
    </Box>
  )
  return (
    <Box>
      <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
        <Toolbar>
          <IconButton color='inherit' aria-label="open drawer" edge="start" sx={{ mr: 2, display: { sm: "none" } }} onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>

          <Typography color="goldenrod" variant='h6' component={"div"} sx={{ flexGrow: 1 }}>
            <RamenDiningIcon sx={{ fontSize: "30px" ,position:"relative",top:5}} />
            Fitfood</Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <ul className='navigation'>
              <li>
                <NavLink activeClassName="active"  to={"/Home"}>Home</NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to={"/About"}>About</NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to={"/Contact"}>Contact</NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to={"/menu"}>Menu</NavLink>
              </li>
              <li>
                <NavLink activeClassName="active"to={"/Cart"}><ShoppingCartIcon/><span style={{ color: "white", backgroundColor: "red" ,padding:"3px",borderRadius:"100px"}}></span></NavLink>
              </li>
            </ul>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer variant="temporary" open={mobileOpen} onClose={handleDrawerToggle} sx={{
          display: { xs: 'block', sm: "none" }, "& .MuiDrawer-paper": {
            boxSizing:"border-box",
            width:"240px",
          },
        }}>
          {drawer}
        </Drawer>
      </Box>
      <Box >
      <Toolbar/>
      </Box>
      
    </Box>
  )
}

export default Header