import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

function Footer() {
    return(
        <footer>
            <Box
                sx = {{backgroundColor: 'secondary.main', width: '100%', position: 'fixed', bottom: 0, p:2,
                    color: 'secondary.dark'}}>
                <Container maxWidth="lg">
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Help</Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Contact
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Support
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Privacy policy
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Company links</Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Facebook
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    LinkedIn
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Instagram
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Creator links</Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Facebook
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    LinkedIn
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Instagram
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </footer>
    );
}

export default Footer;