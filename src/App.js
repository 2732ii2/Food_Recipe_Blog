import './App.css';
import {Routes,Route} from "react-router-dom";
import Home from './comp/Home';
import Create from './comp/Create';
import Saved from './comp/Saved';
import Auth from './comp/Auth';
import Navbar from './comp/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/save" element={<Saved />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
