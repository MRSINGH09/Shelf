import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import LogoutIcon from '@mui/icons-material/Logout';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { changeMode } from "../redux/slices/modeSlice";

export default function DrawerComponent({ open, setOpen }) {
  const mode = useSelector((state) => state.modeSlice.value);
  const dispatch = useDispatch();
  const navigate=useNavigate()

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={() => setOpen(false)}>
      <List>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1rem",
          }}
        >
          <Typography>{mode}</Typography>
          <AccountCircleIcon fontSize="large" sx={{ color: "#1976D2" }} />
        </Box>
      </List>
      <Divider />
      <List>
        {["User", "Admin"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => {dispatch(changeMode(text))
                    navigate(`/${text.toLowerCase()}`)
            }}>
              <ListItemIcon>
                {text == "Admin" ? (
                  <AdminPanelSettingsIcon />
                ) : (
                  <AccountCircleIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer open={open} onClose={() => setOpen(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
