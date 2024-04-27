
import './App.css'
import {Route,Routes} from "react-router-dom";
import IndexPage from  './pages/IndexPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import Layout from "./layout";
import RegisterPage from './pages/RegisterPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import axios from 'axios';
import { UserContextProvider } from './UserContext.jsx';
import PlacesPage from './pages/PlacesPage.jsx';
import PlacesFormPage from './pages/PlacesFormPage.jsx';
import PlacePage from './pages/PlacePage.jsx';


axios.defaults.baseURL = 'http://localhost/3000';
axios.defaults.withCredentials=true;
function App() {  
  
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element = {<IndexPage/>}/>
          <Route path="/login" element={<LoginPage />}/>
          <Route path='/register' element= {<RegisterPage />} />
          <Route path='/account' element = {<ProfilePage />}/>
          <Route path='/account/places' element = {<PlacesPage />}/>
          <Route path='/account/places/new' element = {<PlacesFormPage />}/>
          <Route path='/account/places/:id' element = {<PlacesFormPage />}/>
          <Route path='/places/:id'element={<PlacePage/>}/>
        </Route>
      </Routes>
    </UserContextProvider>
  )
}

export default App
