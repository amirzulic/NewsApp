import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

function Footer() {
    const help = ["Contact", "Support", "Privacy Policy"];
    const links = ["Facebook", "LinkedIn", "Instagram"];
    return (
        <footer>
            <Box
                sx={{
                    backgroundColor: 'secondary.main', p: 2,
                    color: 'secondary.dark'
                }}>
                <Container maxWidth="lg">
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Help</Box>
                            {help.map((item, key) => (
                                <Box>
                                    <Link href="/" color="inherit" key={key}>
                                        {item}
                                    </Link>
                                </Box>
                            ))}
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Company links</Box>
                            {links.map((item, key) => (
                                <Box>
                                    <Link href="/" color="inherit" key={key}>
                                        {item}
                                    </Link>
                                </Box>
                            ))}
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Creator links</Box>
                            {links.map((item, key) => (
                                <Box>
                                    <Link href="/" color="inherit" key={key}>
                                        {item}
                                    </Link>
                                </Box>
                            ))}
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </footer>
    );
}

export default Footer;