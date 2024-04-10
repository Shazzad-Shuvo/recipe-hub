// react router
import { Outlet } from "react-router-dom";

// styles
import "./App.css";

// components
import Navbar from "./components/Navbar/Navbar";
import ThemeSelector from "./components/ThemeSelector/ThemeSelector";

// hooks
import useTheme from "./hooks/useTheme";

function App() {
  const {mode} = useTheme()

  return (
    <>
      <div className={`App ${mode}`}>
        <Navbar></Navbar>
        <ThemeSelector></ThemeSelector>
        <Outlet></Outlet>
      </div>
    </>
  );
}

export default App;
