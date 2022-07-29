import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Controls from '../Controls';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import { IconButton, Tooltip } from '@mui/material';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import Badge from '@mui/material/Badge';

const drawerWidth = 240;

function Riders() {
    
}

export default function DriverHomePage() {

    const navigate = useNavigate();

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, marginTop: '70px', bgcolor: "black" }}>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        Welcome to Driver Home Page
                    </Typography>
                    <Tooltip title="Logout">
                        <IconButton style={{ marginLeft: "auto" }} onClick={() => { navigate('/driverLogin') }}>
                            <LogoutIcon fontSize='medium' style={{ color: "white" }} />
                        </IconButton>
                    </Tooltip>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {
                        width: drawerWidth, boxSizing: 'border-box',
                        marginTop: '70px'
                    },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        {['Riders', 'Availability'].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton onClick={() => { }}>
                                    <ListItemText primary={text} />
                                    {text == 'Riders' &&
                                        <Badge badgeContent={4} color="secondary">
                                            <EmojiPeopleIcon fontSize='medium' />
                                        </Badge>
                                    }
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                <Typography paragraph>

                </Typography>

            </Box>
        </Box>
    );
}
