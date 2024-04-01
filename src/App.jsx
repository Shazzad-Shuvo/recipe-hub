// react router
import { Outlet } from "react-router-dom";

// styles
import "./App.css";

// components
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <div className="App">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
    </>
  );
}

export default App;
