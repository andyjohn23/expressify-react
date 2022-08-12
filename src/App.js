import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './container/HomePage/HomePage';
import SinglePage from './container/SinglePage/SinglePage';
import Write from './container/PostCreate/Write';
import Signup from './container/Registration/Signup';
import Login from './container/Login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post/:id" element={<SinglePage />} />
          <Route path="/createblog" element={<Write />} />
          <Route path="/join" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

