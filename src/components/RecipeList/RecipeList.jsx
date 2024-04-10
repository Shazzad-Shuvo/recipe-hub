// styles
import './RecipeList.css'

import TrashCan from '../../assets/trash-can.svg'
// react router
import { Link } from 'react-router-dom';
// prop-types
import PropTypes from 'prop-types'
// hooks
import useTheme from '../../hooks/useTheme';
// firebase
import { projectFirestore } from "../../firebase/config";


const RecipeList = ({recipes}) => {
    const {mode} = useTheme();

    if(recipes.length === 0){
        return <div className='error'>No recipes to load...</div>
    }

    const handleDelete = (id) =>{
        projectFirestore.collection('recipes').doc(id).delete();
    }

    return (
        <div className='recipe-list'>
            {
                recipes.map(recipe =>(
                    <div key={recipe.id} className={`card ${mode}`}>
                        <h3>{recipe.title}</h3>
                        <p>{recipe.cookingTime} to make.</p>
                        <div>{recipe.method.substring(0, 100)}</div>
                        <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
                        <img 
                            className='delete'
                            src={TrashCan}
                            onClick={() => handleDelete(recipe.id)}
                        />
                    </div>
                ))
            }
        </div>
    );
};

export default RecipeList;


// defining propTypes
RecipeList.propTypes = {
    recipes: PropTypes.array,
}