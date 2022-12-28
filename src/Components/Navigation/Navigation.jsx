import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './Navigation.css'
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';


import { IoSettingsOutline, IoLogOutOutline, IoHomeOutline, IoDesktopOutline,
IoMenu } from "react-icons/io5";

// dRAWER
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';

// breadcrumbs
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';



const Navigation = () => {
  // drawer
    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
        }

        setState({ ...state, [anchor]: open });
    };


    const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >

 

          <List>
          <Link to="/collections" style={{textDecoration: 'none', color: 'black'}}> 
                <ListItem key='collection' disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                        <FolderCopyIcon />
                  </ListItemIcon>
                  <ListItemText primary='Collections' />
                </ListItemButton>
              </ListItem>
            </Link>
            <Divider />

             <Link to="collections/school-tasks" style={{textDecoration: 'none', color: 'black'}}> 
                <ListItem key='school' disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                        <SchoolIcon />
                  </ListItemIcon>
                  <ListItemText primary='School Tasks' />
                </ListItemButton>
              </ListItem>
            </Link>

            <Link to="collections/work-tasks" style={{textDecoration: 'none', color: 'black'}}>
              <ListItem key='work' disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                        <WorkIcon />
                  </ListItemIcon>
                  <ListItemText primary='Work Tasks' />
                </ListItemButton>
              </ListItem>
            </Link>


          </List>

          
          
        </Box>
      );
  // DRAWER


  const [isLoggedIn, setisLoggedIn] = useState(true);
  const [dropDownList, setDropDownList] = useState(false); // drop down 
  const [darkMode, setDarkMode] = useState(false);

  const navigate = useNavigate();

  const handelDropDownOpen = () => {
    setDropDownList(!dropDownList);
  }

  const handelLogOut = () => {
    setisLoggedIn(!isLoggedIn);
    navigate('/');
  }

  const handelDarkMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <div className={darkMode ? 'darkModeWrapper': 'wrapper'}  style={{padding: isLoggedIn? '0 1%': '0 10%'}}>
        {isLoggedIn? 
        <>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                
                <React.Fragment key={'left'}>
                    
                <IconButton aria-label="fingerprint" onClick={toggleDrawer('left', true)}>
                    <IoMenu style={{marginRight: '10px'}} />
                     Dashboard
                </IconButton>
                    <Drawer
                        anchor={'left'}
                        open={state['left']}
                        onClose={toggleDrawer('left', false)}
                    >
                        {list('left')}
                       
                    </Drawer>
                </React.Fragment>

                
            </div>
            
            
            <Avatar 
                    alt="Remy Sharp" 
                    src="https://media.licdn.com/dms/image/C5603AQFaDzgAkznzXQ/profile-displayphoto-shrink_800_800/0/1657976222975?e=1677715200&v=beta&t=MyxuTetXRqnyUP43YZ7E3HIxSaOcOFTRfeBJH8lM0Gs" 
                    onClick={handelDropDownOpen}
                />
            
            {dropDownList &&
            <div className='dropdown-menu'>

                <div className="item-dropdown">
                    <IoHomeOutline style={{fontSize: '20px', marginRight: '5px', marginTop: '-5px'}} />
                    <Link to="/profile" className='item-btn'>My Profile</Link>
                </div>

                <div className="item-dropdown">
                    <IoSettingsOutline style={{fontSize: '20px', marginRight: '5px', marginTop: '-5px'}} />
                    <Link to="/settings" className='item-btn'>Settings</Link>
                </div>

                <div className="item-dropdown" onClick={handelDarkMode}>
                    <IoDesktopOutline style={{fontSize: '20px', marginRight: '5px', marginTop: '-5px'}} />
                    <Link className='item-btn'>Dark Mode</Link>
                </div>

                <hr />

                <div className="item-dropdown" onClick={handelLogOut}>
                    <IoLogOutOutline style={{fontSize: '20px', marginRight: '5px', marginTop: '-5px'}} />
                    <Link className='item-btn'>Logout</Link>
                </div>
            </div>}

            
        </>
    
        :
        <>
            <div>
                <h4>ToDo Application</h4>
            </div>
            
            
            <div className='btns'>
                <Button style={{color:'black'}}>Sign in</Button>
                <Button variant='outlined' style={{color:'black', borderColor: 'black'}}>Register</Button>
            </div>
        </>
        }


        
        

        





    </div>
  )
}

export default Navigation