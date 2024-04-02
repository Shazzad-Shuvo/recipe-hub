// styles
import './Home.css'

// hooks
import { useFetch } from '../../hooks/useFetch';

// components
import RecipeList from '../../components/RecipeList/RecipeList';

const Home = () => {
    const url = 'http://localhost:3000/recipes';
    const {data, isPending, error} = useFetch(url);
    return (
        <div className='home'>
            {error && <p className='error'>{error}</p>}
            {isPending && <p className='loading'>Loading...</p>}
            {data && <RecipeList recipes={data}></RecipeList>}
        </div>
    );
};

export default Home;