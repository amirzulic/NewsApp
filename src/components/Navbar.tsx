import React from "react";
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import Link from '@mui/material/Link';

function Navbar() {
    return (
        <div>
            <Box sx={{flexGrow: 1}}>
                <AppBar position="static" color="secondary">
                    <Toolbar>
                        <Link href="/" color="inherit">
                            <NewspaperIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        </Link>
                        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                            <Link href="/" color="inherit" underline="none">
                                <b>NEWS APP</b>
                            </Link>
                        </Typography>
                        <Button color="inherit" disabled>The biggest news platform</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
}

export default Navbar;
