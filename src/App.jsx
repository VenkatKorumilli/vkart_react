import { Link, Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <div style={{ flex: 1 }}>
        <Outlet></Outlet>
      </div>
    </>
  );
}

export default App;
