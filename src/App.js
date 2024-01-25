import { Route, Routes, useParams } from 'react-router-dom';
import './App.css';
// import HomeLayout from './Components/Layouts/HomeLayout';
import HomePage from './Components/Pages/HomePage';
import AboutPage from './Components/Pages/AboutPage';
import NotFoundPage from './Components/Pages/NotFoundPage';
import Signup from './Components/Pages/Signup';
import Login from './Components/Pages/Login';

function App() {
  const {id} = useParams()
  console.log(id)
  return (
    <div className="App">
      <Routes>
       <Route path='/' element={<HomePage />}/>
       <Route path={`/about`} element={<AboutPage />}/>
       <Route path="/signup" element={<Signup />}/> 
       <Route path="/login" element={<Login />}/>
       <Route path="*" element={<NotFoundPage />}/>
      </Routes>
    </div>
  );
}

export default App;
