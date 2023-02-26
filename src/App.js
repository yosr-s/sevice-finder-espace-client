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
import Contact from './home/private/Contact';
import Project from './home/views/Project';
import Login from './components/Login';
import Register from './components/Register';
import About from './home/views/About';


function App() {
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
          <Route path="/profile" element={<Profile/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/project/:id" element={<Project/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/about" element={<About/>} />


        </Route>


      </Routes>
    </BrowserRouter>
     
    </>
  );
}

export default App;
