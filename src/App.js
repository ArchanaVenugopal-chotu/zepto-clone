import './App.css';
import Homepage from './Homepage.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Searchitems from './Searchitems.js';

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
              <Route index element={<Homepage />} />
              <Route path="/items" element={<Searchitems />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
