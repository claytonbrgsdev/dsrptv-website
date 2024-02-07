import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/Images/logo_nav_bar.jpeg';
import { Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import constructionLogo from './../../assets/Construction/bricks.mp4'
import constructionLogo2 from './../../assets/Construction/wall.mp4'

import InstagramIcon from '@mui/icons-material/Instagram';
import bandcampLogo from './../../assets/social logos/bandcamp-button-circle-black-512.png'
import soundcloudLogo from './../../assets/social logos/soundcloud-logo.png'

const NavBar: React.FC = () => {
    
    const navigate = useNavigate();

    

    
    // Add this function to handle navigation
    const handleNavigate = (path: string) => {
        navigate(path);
    };

    return (
        <>
            <AppBar position="fixed" style={{ backgroundColor: "white" }}>
                <Toolbar style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                    {/* Logo and Navigation Buttons */}
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={logo} alt="DSRPTV Logo" style={{ marginRight: '32px', maxWidth: '150px' }}
                            onClick={() => handleNavigate('/')} // Add navigation to logo click
                        />
                        <Button color="inherit" style={{ color: '#000' }} onClick={() => handleNavigate('/home')}>Home</Button>
                        <Button color="inherit" style={{ color: '#000', marginRight: "20px" }} onClick={() => handleNavigate('/about')}>About</Button>
                    </div>
                    {/* Centered Message with Placeholder Icon */}
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <a href="https://dsrptvrec.bandcamp.com/" target="_blank" rel="noopener noreferrer">
                            <IconButton>
                                <img src={bandcampLogo} alt="Bandcamp" style={{ width: '24px', height: '24px' }} />
                            </IconButton>
                        </a>
                        <a href="https://soundcloud.com/dsrptvrec" target="_blank" rel="noopener noreferrer">
                            <IconButton>
                                <img src={soundcloudLogo} alt="Soundcloud" style={{ width: '24px', height: '24px' }} />
                            </IconButton>
                        </a>
                        <a href="https://www.instagram.com/dsrptvrec/" target="_blank" rel="noopener noreferrer">
                            <IconButton>
                                <InstagramIcon />
                            </IconButton>
                        </a>
                    </div>
                    <Box style={{ display: 'flex', alignItems: 'center', color: '#000', marginLeft: 'auto', marginRight: "10px" }}>
                        <video autoPlay loop muted playsInline style={{ width: '50px', height: '50px', pointerEvents: 'none' }}>
                            <source src={constructionLogo2} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <h3 style={{ margin: 0, padding: '0 10px', fontWeight: "normal" }}>
                            website under construction
                        </h3>
                        <video autoPlay loop muted playsInline style={{ width: '50px', height: '50px', pointerEvents: 'none' }}>
                            <source src={constructionLogo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </Box>

                </Toolbar>
            </AppBar>
            <br />
        </>
    );
};

export default NavBar;
