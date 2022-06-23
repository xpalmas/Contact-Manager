import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

const Header = () => {
    return (
        <div>
            <AppBar position="static">
                <Typography variant="h2" align="center">
                        Contact Manager
                </Typography>                
            </AppBar>
        </div>
    )
}

export default Header;