
import { Box, Typography, Link } from '@mui/material';
import footerLogo from './../../assets/Logo/Logo-Novo-Frame-High.png'; // Import your logo

const Footer = () => {
  return (
    <Box
left={0}
    component="footer"
      sx={{
        bgcolor: 'background.paper',
        color: 'text.primary',
        py: 1,
        px: 0,
        width: '100%', // Ensure it's full width
        position: 'absolute', // Add this for absolute positioning of children
        
      }}
    >
      <Box
        component="img"
        src={footerLogo}
        alt="DSRPTV REC"
        sx={{
          height: 'auto',
          width: '120px', // Adjust width as necessary
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          
        }}
      /><br/><br/>
      <Typography
        variant="subtitle1"
        align="center"
        component="p"
        sx={{
          mt: '64px', // Adjust the margin-top to give space for the logo above
          fontFamily: "monospace",
        }}
      >
        unexpected beats drives our minds and bodies. this is dsrptv rec. brazilian record label.
      </Typography>
      <Typography variant="body2" align="center" sx={{ mt: 1 }}>
        {'Copyright © '}
        <Link color="inherit" href="https://dsrptvrec.com/">
          DSRPTV REC
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </Box>
  );
};

export default Footer;
