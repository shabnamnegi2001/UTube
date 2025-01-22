import './App.css';
import Navbar from './Components/Navbar/navbar';
import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Allroutes from './allRoutes.jsx';
import DrawerSliderbar from './Components/leftsidebar/drawerSliderbar.jsx';

function App() {
const [toggledrawerSidebar, setToggledrawerSidebar] = useState({
    display: "none",
  });

  const toggleDrawer = () => {
    if(toggledrawerSidebar === "none"){
      setToggledrawerSidebar({
        display: "flex",
      }); 
    } else {
      setToggledrawerSidebar({
        display: "none",
      }) 
    }
  }

const [editCreateChanelBtn, setEditCreateChanelBtn] = useState(false);
const [videoUploadPage, setVideoUploadPage] = useState(false);

  return (
    <Router>
    <Navbar setEditCreateChanelBtn={setEditCreateChanelBtn} toggleDrawer={toggleDrawer} />
    {/* <DrawerSliderbar toggleDrawer={toggleDrawer} setToggledrawerSidebar={setToggledrawerSidebar}/> */}
    <Allroutes />
    </Router>
  );
}

export default App;
