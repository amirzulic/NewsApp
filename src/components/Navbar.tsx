import React from "react";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Navbar() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
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
            <Box sx={{width: '100%', typography: 'body1'}}>
                <TabContext value={value}>
                    <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example" color="primary">
                            <Tab label="Main Page" value="1"/>
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        The news list will go here
                    </TabPanel>
                </TabContext>
            </Box>
        </div>
    );
}

export default Navbar;
