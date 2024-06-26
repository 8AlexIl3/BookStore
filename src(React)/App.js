import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import AddBook from "./Books/AddBook";
import EditBook from "./Books/EditBook";
export default function App() {
  
  return (
    <div className="App">
      <Router>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/addbook" element={<AddBook/>}/>
      <Route exact path="/editbook/:id" element={<EditBook/>}/>
    </Routes>
    </Router>
    </div>
  );
}

