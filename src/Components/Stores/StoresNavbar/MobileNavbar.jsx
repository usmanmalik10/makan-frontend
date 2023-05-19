import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useLocation, useNavigate } from "react-router-dom";
import { BiLogOut, BiMenuAltLeft } from "react-icons/bi";

const MobileNavbar = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      style={{ background: "red" }}
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <div className="nav-links">
          {props.navList.map((item) => (
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <item.icon className="nav-icon" />
                </ListItemIcon>
                <ListItemText>
                  <p
                    className="nav-text"
                    onClick={() => navigate(item.route)}
                    style={{
                      color: location.pathname === item.route && "white",
                    }}
                  >
                    {item.text}
                  </p>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </div>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <BiLogOut className="logout-icon" />
            </ListItemIcon>
            <ListItemText>
              <p
                onClick={() => navigate("/logout")}
                style={{
                  color: "rgb(207, 207, 207)",
                }}
              >
                Logout
              </p>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      {["top"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            {<BiMenuAltLeft className="mobile-drawer" />}
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default MobileNavbar;
