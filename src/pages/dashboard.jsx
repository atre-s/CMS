import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Paper, Chip, Button } from "@mui/material";
import GavelIcon from "@mui/icons-material/Gavel";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PeopleIcon from "@mui/icons-material/People";
import FolderIcon from "@mui/icons-material/Folder";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EventIcon from "@mui/icons-material/Event";
import GroupIcon from "@mui/icons-material/Group";
import GavelRoundedIcon from '@mui/icons-material/GavelRounded';
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

const Main = styled("main")(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginRight: open ? drawerWidth : 0,
}));

const AppBar = styled(MuiAppBar)(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

const StyledPaper = styled(Paper)(({ theme, color }) => ({
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.getContrastText(color),
  background: color,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  height: "200px",
  position: "relative",
  overflow: "hidden",
}));

const IconWrapper = styled("div")({
  position: "absolute",
  bottom: "10px",
  right: "10px",
  opacity: 0.2,
});

const DashboardContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: theme.spacing(3),
}));

const DashboardItem = styled("div")(({ theme }) => ({
  flexBasis: "calc(33.333% - 16px)",
  [theme.breakpoints.down("md")]: {
    flexBasis: "calc(50% - 16px)",
  },
  [theme.breakpoints.down("sm")]: {
    flexBasis: "100%",
  },
}));

export default function Dashboard() {
  const theme = useTheme();
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const dashboardItems = [
    {
      title: "Upcoming Cases",
      icon: <GavelRoundedIcon sx={{ fontSize: 60 }} />,
      count: 30,
      color: "#FFC107",
    },
    {
      title: "Notifications",
      icon: <NotificationsIcon sx={{ fontSize: 60 }} />,
      count: 30,
      color: "#2196F3",
    },
    {
      title: "Team Members",
      icon: <PeopleIcon sx={{ fontSize: 60 }} />,
      count: 30,
      color: "#4CAF50",
    },
    {
      title: "Total Cases",
      icon: <GavelRoundedIcon sx={{ fontSize: 60 }} />,
      count: 30,
      color: "#9C27B0",
      path: "/case-list"
    },
    {
      title: "Total Clients",
      icon: <GroupIcon sx={{ fontSize: 60 }} />,
      count: 30,
      color: "#FF5722",
    },
    {
      title: "Documents",
      icon: <FolderIcon sx={{ fontSize: 60 }} />,
      count: 30,
      color: "#607D8B",
    },
  ];

  return (
    <Box sx={{display:'flex'}}>
      <CssBaseline />
      <AppBar position="fixed" open={open} color="default">
        <Toolbar>
          <GavelRoundedIcon 
          sx={{
            fontSize: "40px",
            marginRight: 2,
            color: "#3B475C",
          }}
          />
          {/* <GavelIcon
            sx={{
              fontSize: "40px",
              marginRight: 2,
              color: theme.palette.primary.main,
            }}
          /> */}
          <Typography
            variant="h4"
            noWrap
            sx={{ flexGrow: 1, fontFamily: "serif", color:"#293040" }}
            component="div"
          >
            Khurana Associates
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Main open={open}>
        <DrawerHeader />
        <DashboardContainer>
          {dashboardItems.map((item, index) => (
            <DashboardItem key={index}>
              <StyledPaper elevation={3} color={item.color}>
                <Typography variant="h2" component="div">
                  {item.count}
                </Typography>
                <Typography variant="subtitle1">{item.title}</Typography>
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    mt: 1,
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.3)",
                    },
                  }}
                  onClick={()=>navigate(item.path)}
                >
                  View Details
                </Button>
                <IconWrapper>{item.icon}</IconWrapper>
              </StyledPaper>
            </DashboardItem>
          ))}
        </DashboardContainer>
        <Paper sx={{ marginTop: 3, padding: 2 }} elevation={3}>
          <Typography variant="h6" gutterBottom>
            Recent Cases
          </Typography>
          <List>
            <ListItem>
              <ListItemText
                primary="Smith vs. Johnson"
                secondary="2023-06-15"
              />
              <Chip label="In Progress" color="primary" />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="State vs. Williams"
                secondary="2023-06-14"
              />
              <Chip label="Scheduled" color="secondary" />
            </ListItem>
          </List>
        </Paper>
      </Main>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
        variant="temporary"
        anchor="right"
        open={open}
        onClose={handleDrawerClose}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
          <Typography variant="h6" sx={{ marginLeft: 1 }}>
            Court Management
          </Typography>
        </DrawerHeader>
        <Divider />
        <List>
          {["Dashboard", "Cases", "Calendar", "Clients", "Documents"].map(
            (text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index === 0 ? (
                      <DashboardIcon />
                    ) : index === 1 ? (
                      <GavelRoundedIcon />
                    ) : index === 2 ? (
                      <EventIcon />
                    ) : index === 3 ? (
                      <GroupIcon />
                    ) : (
                      <FolderIcon />
                    )}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
      </Drawer>
    </Box>
  );
}
