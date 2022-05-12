import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import CelebrationIcon from "@mui/icons-material/Celebration";
import { Button } from "@mui/material";
// import MenuIcon from '@mui/icons-material/Menu';
// import Button from '@mui/material/Button';

const settings = ["Dashboard", "Logout"];
// const creates = [];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="relative"
      color="grey"
      sx={{
        width: "95%",
        mx: ".5rem",
        my: ".5rem",
        borderRadius: ".25rem",
        boxShadow: "10px -5px 10px #ccc, -20px -20px 100px #fff",
        background:
          "linear-gradient(90deg, rgba(255,255,255,1) 20%, rgba(183,203,231,1) 40%, rgba(166,210,208,1) 65%, rgba(236,188,171,1) 95%)",
      }}
    >
      <Container variant="contained" maxWidth="xl" sx={{
        p:'0.5rem',}}>
        <Toolbar disableGutters>
          <Box
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              justifyContent:'space-between',
              display: { xs: "none", md: "flex", lg: "flex" },
              fontFamily: "Titillium Web",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#008996",
              textDecoration: "none",
            }}
          >
            <CelebrationIcon
              sx={{
                display: { xs: "none", md: "flex" },
                mr: 1,
                color: "#FF8B53",
              }}
            />
            <Typography>KUDOS</Typography>
          </Box>

          <Box
            component="a"
            href="/kudos"
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Titillium Web",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#008996",
              textDecoration: "none",
            }}
          >
            <CelebrationIcon
              sx={{
                display: { xs: "flex", md: "none" },
                mr: 1,
                color: "#FF8B53",
              }}
            />
            <Typography>KUDOS</Typography>
          </Box>

          <Box
            sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
          >
            <Box sx={{ flexGrow: 0, md: "flex" }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt="Nathaniel Neufeld"
                    src="/static/images/avatar/2.jpg"
                    sx={{ bgcolor: "#FF8B53" }}
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Button
              variant="contained"
              fontSize="xlarge"
              sx={{
                fontSize: 15,
                padding: 1,
                ml: ".5rem",
                md: "flex",
                lg: "flex",
                color: "#778FC2",
                bgcolor: "white",
                borderTopLeftRadius: '5rem',
                borderBottomLeftRadius: '5rem',
              }}
              startIcon={
                <AddBoxIcon
                  onClick={"/create"}
                  sx={{ width:'100', m:'0', padding:0, color: "#778FC2" }}
                ></AddBoxIcon>
              }
            >
              KUDO!
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
