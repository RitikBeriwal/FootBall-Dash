import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from './Menu';
import { useState } from 'react';
import ShortMenu from './ShortMenu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import {IconButton} from '@mui/material'




const drawerWidth = 240;
const shortdrawerWidth = 80;

export default function Navbar({content}) {
  const [isbigmenu,setBigMenu]=useState(false)

  const changeMenu = (()=>{
    setBigMenu(!isbigmenu)
  })



  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton sx={{marginRight:'30px', color:'white'}} onClick={changeMenu}>
            {isbigmenu ? <MenuOpenIcon/> : <MenuIcon/>}
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Ritik Beriwal Co.
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: isbigmenu ? drawerWidth:shortdrawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: isbigmenu ? drawerWidth:shortdrawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        
{isbigmenu ? <Menu/> : <ShortMenu/>}

      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {content}
      </Box>
    </Box>
  );
}