import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './container/HomePage/HomePage';
import SinglePage from './container/SinglePage/SinglePage';
import Write from './container/PostCreate/Write';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post/:id" element={<SinglePage />} />
          <Route path="/createblog" element={<Write />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

