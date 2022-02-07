import React from "react";
import { makeStyles } from "@mui/styles";
import {
  Divider,
  Drawer,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  AppBar,
  Avatar,
} from "@mui/material";
import { Box } from "@mui/system";

import { SubjectOutlined, AddCircleOutlined } from "@mui/icons-material";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { format } from "date-fns";

const drawerWidth = 240;

const useStyles = makeStyles({
  page: {
    background: "black",
    width: "100%",
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  root: {
    display: "flex",
  },
  active: {
    background: "blue",
  },
  title: {
    padding: "16px",
  },
  avatar: {
    marginLeft: "8px",
  },
  space: {
    paddingRight: "6px",
  },
});

const menuItems = [
  {
    text: "My Notes",
    icon: <SubjectOutlined color="primary" />,
    path: "/",
  },
  {
    text: "Create Note",
    icon: <AddCircleOutlined color="primary" />,
    path: "/create",
  },
];

const Layout = ({ children }) => {
  const classes = useStyles();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className={classes.root}>
      {/* app bar */}
      <AppBar position="fixed" color="transparent" sx={{ width: "100%" }}>
        <Toolbar>
          <Typography sx={{ flexGrow: 1 }}>My Notes</Typography>

          <Typography sx={{ flexGrow: 1 }}>
            <Link to="/create">
              <AddCircleOutlined color="primary" />
            </Link>
          </Typography>

          <Typography>Henri</Typography>
          <Avatar className={classes.avatar} alt="TJH" src="/images.png" />
        </Toolbar>
      </AppBar>

      <Box
        component="main"
        mt={10}
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <div>{children}</div>
      </Box>
    </div>
  );
};

export default Layout;
