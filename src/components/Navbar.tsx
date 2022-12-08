import React from "react";
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Navbar() {
    return (
        <div>
            <Box sx={{flexGrow: 1}}>
                <AppBar position="static" color="secondary">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                            NEWS APP
                        </Typography>
                        <Button color="inherit" disabled>The biggest news platform</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
}

export default Navbar;
