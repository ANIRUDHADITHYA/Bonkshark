import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import F0F from './Pages/404/404';
import Homepage from './Pages/Homepage/Homepage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="*" element={<F0F />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
