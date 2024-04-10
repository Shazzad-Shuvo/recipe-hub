// styles
import RecipeList from "../../components/RecipeList/RecipeList";
import { useFetch } from "../../hooks/useFetch";
import "./Search.css";

// react router
import { useLocation } from "react-router-dom";

const Search = () => {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get("q");
  //   console.log(query);

    // const url = `http://localhost:3000/recipes?q=${query}`;

  //   const { error, isPending, data } = useFetch(url);
  //   console.log(data);

  const url = "http://localhost:3000/recipes?q=" + query;
  const { error, isPending, data } = useFetch(url);
  console.log(data);

  return (
    <div>
      <h2 className="page-title">Recipes Including: "{query}"</h2>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <RecipeList recipes={data}></RecipeList>}
    </div>
  );
};

export default Search;
