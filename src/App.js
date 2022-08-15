import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './container/HomePage/HomePage';
import SinglePage from './container/SinglePage/SinglePage';
import Write from './container/PostCreate/Write';
import Signup from './container/Registration/Signup';
import Login from './container/Login/Login';
import { useContext } from 'react';
import { Context } from './context/Context';

function App() {
  const { user } = useContext(Context)
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post/:id" element={<SinglePage />} />
          <Route path="/createblog" element={user ? <Write /> : <Login />} />
          <Route path="/join" element={user ? <HomePage /> : <Signup />} />
          <Route path="/login" element={user ? <HomePage /> : <Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

