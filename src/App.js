import logo from './logo.svg';
import './App.css';
import Layout from './home/views/Layout';
import { BrowserRouter, Routes,Route ,useNavigate,Navigate} from 'react-router-dom';
import Home from './home/views/Home';
import Projects from './home/views/Projects';
import ProjectsService from './home/views/ProjectsService';
import Profiles from './home/views/Profiles';
import ProfilesService from './home/views/ProfilesService';
import Profile from './home/views/Profile';
import Project from './home/views/Project';
import Login from './components/Login';
import Register from './components/Register';
import About from './home/views/About';
import Contact from './home/views/Contact';
import Dashbord from './home/private/Dashbord';
import PostProject from './home/private/PostProject';
import BecomeProvider from './home/private/BecomeProvider';
import EditProfile from './home/private/EditProfile';
import Messages from './home/private/Messages';


function App() {
  const PrivateRoutes = ({ children }) => {
    if (!localStorage.getItem("client_id")) {
      return <Navigate to="/login" />;
    }
    return children;
  };
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/projects/:id" element={<ProjectsService/>} />
          <Route path="/profiles" element={<Profiles/>} />
          <Route path="/profiles/:id" element={<ProfilesService/>} />
          <Route path="/profile/:id" element={<Profile/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/project/:id" element={<Project/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/about" element={<About/>} />
          {/**private routes */}
          <Route path="/dashbord" element={<PrivateRoutes><Dashbord/></PrivateRoutes>} />
          <Route path="/post" element={<PrivateRoutes><PostProject/></PrivateRoutes>} />
          <Route path="/addinfos" element={<PrivateRoutes><BecomeProvider/></PrivateRoutes>} />
          <Route path="/editprofile" element={<PrivateRoutes><EditProfile/></PrivateRoutes>} />
          <Route path="/messages" element={<PrivateRoutes><Messages/></PrivateRoutes>} />








        </Route>

       


      </Routes>
    </BrowserRouter>
     
    </>
  );
}

export default App;
