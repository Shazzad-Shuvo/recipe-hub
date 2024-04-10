// styles
import "./Searchbar.css";

// react
import { useState } from "react";

// react router
import { useNavigate } from "react-router-dom";


const Searchbar = () => {
    const [term, setTerm] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();

        navigate(`/search?q=${term}`);
    }

  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search</label>
        <input 
            type="text"
            id="search"
            onChange={(e) => setTerm(e.target.value)}
            required 
        />
      </form>
    </div>
  );
};

export default Searchbar;
