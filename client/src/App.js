import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from './pages/homePage'
import LoginPage from './pages/loginPage'
import ProfilePage from './pages/profilePage'
 
function App() {
  return <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/Home" element={<HomePage/>}/>
        <Route path="/Profile" element={<ProfilePage/>}/>
      </Routes>
    </BrowserRouter>
  </div>;
}

export default App;
