import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { Link, useLocation } from "react-router-dom";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import DefaultUser from "../assets/images/DefaultUser.png";

// import theme from "../../Theme/theme";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import PropTypes from "prop-types";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

const Navbar = (props) => {
 
  const logoStyle = {
    fontFamily: "GontserratBold !important",
    fontStyle: "normal !important",
    fontSize: {
      xs: "20px !important",
      sm: "22px !important",
      md: "28px !important",
      lg: "36px !important",
    },
    lineHeight: "104.4% !important",
    fontWeight: "700 !important",
    color: "#165643 !important",
    wordWrap: "no-rape",
  };

  const [selected, setSelected] = useState("");
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const location = useLocation()

  useEffect(() => {
    if (location) {
      location?.pathname?.includes("opd") && setSelected("opd");
      location?.pathname?.includes("indoor") && setSelected("indoor");
      location?.pathname?.includes("staff") && setSelected("staff");
      location?.pathname?.includes("lab") && setSelected("lab");

    }
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          component="nav"
          sx={{
            background: "#fff",
            boxShadow: "none",
            py: 2,
            px: { md: 0, xl: 3 },
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { xs: "block", md: "none" } }}
            >
              <MenuIcon sx={{ color: "#165643" }} />
            </IconButton>
            <Box sx={{ flex: 1 }}>
              <Toolbar
                disableGutters={true}
                sx={{
                  backgroundColor: "white",
                  display: "flex",
                  flex: 1,
                  justifyContent: "space-between",
                }}
              >
                <Typography sx={logoStyle}>Hospital Name</Typography>

                <Box sx={{ display: { xs: "none", md: "block" } }}>
                  <Link
                    className={`first after ${selected == "" ? "active" : ""}`}
                    onClick={() => setSelected("")}
                    to="/"
                  >
                    Dashboard
                  </Link>
                  <Link
                    className={`first after ${
                      selected == "opd" ? "active" : ""
                    }`}
                    to="/opd"
                    onClick={() => setSelected("opd")}
                  >
                    OPD
                  </Link>
                  <Link
                    className={`first after ${
                      selected == "indoor" ? "active" : ""
                    }`}
                    to="/indoor"
                    onClick={() => setSelected("indoor")}
                  >
                    Indoor
                  </Link>
                  <Link
                    className={`first after ${
                      selected == "staff" ? "active" : ""
                    }`}
                    to="/staff"
                    onClick={() => setSelected("staff")}
                  >
                    Staff
                  </Link>
                  <Link
                    className={`first after ${
                      selected == "lab" ? "active" : ""
                    }`}
                    to="/lab"
                    onClick={() => setSelected("lab")}
                  >
                    Lab Colab
                  </Link>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Badge
                    badgeContent={2}
                    color="secondary"
                    sx={{
                      mx: 4,
                    }}
                  >
                    <NotificationsActiveIcon color="action" />
                  </Badge>

                  <Button
                    variant="outlined"
                    sx={{
                      background: "#E6F1F2",
                      color: "#165643",
                      borderRadius: "43px",
                      pl: 1,
                    }}
                  >
                    <img
                      src={DefaultUser}
                      alt="user"
                      style={{ height: "36px", width: "36px" }}
                    />{" "}
                    &nbsp; Davis John
                  </Button>
                </Box>
              </Toolbar>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", md: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            <Link
              className={`first after drawer-nav ${
                selected == "" ? "active" : ""
              }`}
              onClick={() => setSelected("")}
              to="/"
            >
              Dashboard
            </Link>
            <Link
              className={`first after drawer-nav ${
                selected == "opd" ? "active" : ""
              }`}
              to="/opd"
              onClick={() => setSelected("opd")}
            >
              OPD
            </Link>
            <Link
              className={`first after drawer-nav ${
                selected == "indoor" ? "active" : ""
              }`}
              to="/indoor"
              onClick={() => setSelected("indoor")}
            >
              Indoor
            </Link>
            <Link
              className={`first after drawer-nav ${
                selected == "staff" ? "active" : ""
              }`}
              to="/staff"
              onClick={() => setSelected("staff")}
            >
              Staff
            </Link>
            <Link
                    className={`first after drawer-nav ${
                      selected == "lab" ? "active" : ""
                    }`}
                    to="/lab"
                    onClick={() => setSelected("lab")}
                  >
                    Lab Colab
                  </Link>
          </Drawer>
        </Box>
        <Box sx={{ height: "110px" }}></Box>
      </Box>
    </>
  );
};
Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;
