import React from 'react';
import { AppBar, Toolbar, Typography, BottomNavigation, BottomNavigationAction, MenuItem, Menu, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import TableChartIcon from '@mui/icons-material/TableChart';
import AssignmentIcon from '@mui/icons-material/Assignment';
import BarChartIcon from '@mui/icons-material/BarChart';
import LanguageIcon from '@mui/icons-material/Language';

function Header({ changeLanguage }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (lang) => {
    changeLanguage(lang);
    handleClose();
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Maiora Task
        </Typography>
        <BottomNavigation>
          <Link to="/tables" style={{ textDecoration: 'none', color: 'inherit' }}>
            <BottomNavigationAction label="Tables" icon={<TableChartIcon />} />
          </Link>
          <Link to="/forms" style={{ textDecoration: 'none', color: 'inherit' }}>
            <BottomNavigationAction label="Forms" icon={<AssignmentIcon />} />
          </Link>
          <Link to="/charts" style={{ textDecoration: 'none', color: 'inherit' }}>
            <BottomNavigationAction label="Charts" icon={<BarChartIcon />} />
          </Link>
          <IconButton
            aria-label="language"
            aria-controls="language-menu"
            aria-haspopup="true"
            onClick={handleClick}
            color="inherit"
          >
            <LanguageIcon sx={{ color: 'gold' }} />
          </IconButton>
          <Menu
            id="language-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={() => handleLanguageChange('en')}>English</MenuItem>
            <MenuItem onClick={() => handleLanguageChange('ta')}>Tamil</MenuItem>
            <MenuItem onClick={() => handleLanguageChange('kn')}>Kannada</MenuItem>
          </Menu>
        </BottomNavigation>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
