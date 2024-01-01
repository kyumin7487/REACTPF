import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; // REACT ROUTE 사용
import Main from './Components/Main/Main';
import Head from './Components/Head/Head';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/Head" element={<Head />} />
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
