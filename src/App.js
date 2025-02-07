import './App.css';
import Navbar from './Components/Navbar/navbar';
import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Allroutes from './allRoutes.jsx';
import DrawerSliderbar from './Components/leftsidebar/drawerSliderbar.jsx';
import CreateEditChannel from './Pages/channel/CreateEditChannel.jsx';
import VideoUpload from './Pages/videoUpload/VIdeoUpload.jsx';

function App() {
const [toggledrawerSidebar, setToggledrawerSidebar] = useState({
    display: "none",
  });

  const toggleDrawer = () => {
    if(toggledrawerSidebar.display === "none"){
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
      {videoUploadPage && (
        <VideoUpload setVideoUploadPage={setVideoUploadPage}/>
      )}
      {editCreateChanelBtn && (
        <CreateEditChannel setEditCreateChanelBtn={setEditCreateChanelBtn}/>
      )}
    <Navbar setEditCreateChanelBtn={setEditCreateChanelBtn} toggleDrawer={toggleDrawer} />
    <DrawerSliderbar toggleDrawer={toggleDrawer} setToggledrawerSidebar={setToggledrawerSidebar}  toggledrawerSidebar={toggledrawerSidebar}/>
    <Allroutes  setEditCreateChanelBtn={setEditCreateChanelBtn} setVideoUploadPage={setVideoUploadPage}/>
    </Router>
  );
}

export default App;
