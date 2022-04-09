import "./home.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const Home = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <>
      <div className="home">
        <Drawer
          anchor="left"
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              // width: drawerWidth,
            },
          }}
        >
          <Sidebar />
        </Drawer>
        <div className="homeContainer">
          <MenuIcon
            className="toogle_icon"
            onClick={() => setIsDrawerOpen(true)}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
