// styles
import "./Recipe.css";
// react
import { useEffect, useState } from "react";
// react router
import { useParams } from "react-router-dom";
// hooks
import useTheme from "../../hooks/useTheme";
// firebase
import { projectFirestore } from '../../firebase/config';


const Recipe = () => {
  const { id } = useParams();
  const {mode} = useTheme();

  const [recipe, setRecipe] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() =>{
      setIsPending(true);
      const unsub = projectFirestore.collection('recipes').doc(id).onSnapshot((doc) =>{
          if(doc.exists){
            setRecipe(doc.data());
            setIsPending(false);
          }
          else{
            setIsPending(false);
            setError('Oops...! Recipe not found')
          }
        }, (err) =>{
          setError(err.message);
          setIsPending(false);
        })

        return () => unsub();

    }, [id])

    const handleUpdate = () =>{
      projectFirestore.collection('recipes').doc(id).update({
        title: 'Something Completely Different'
      })
    }

  return (
    <div className={`recipe ${mode}`}>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {recipe && (
        <>
            <h2 className="page-title">{recipe.title}</h2>
            <p>Takes {recipe.cookingTime} to cook.</p>
            <ul>
                {recipe.ingredients.map((ing) => <li key={ing}>{ing}</li>)}
            </ul>
            <p className="method">{recipe.method}</p>
            <button onClick={handleUpdate}>Update Me</button>
        </>
      )}
    </div>
  );
};

export default Recipe;
