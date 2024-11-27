// Modulos
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
//Biblioteca Axios para fazer Requisição da Api
import axios from "axios";
// CSS Module
import styles from "./RecipeDetails.module.css";

/**
 * Componente para exibir o item detalhado de uma receita especifica.
 */
const RecipeDetails = () => {
  const { id } = useParams();
  const [receita, setReceita] = useState(null);
  const navigate = useNavigate();

  // Busca os detalhes da receita ao montar o componente na página ou quando id muda.
  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        setReceita(response.data.meals[0]);
      } catch (error) {
        console.error("Erro ao buscar detalhes da receita:", error);
      }
    };

    fetchRecipeDetails();
  }, [id]);

  // Se acaso o valor for falso o loading e mostrado na tela. 
  if (!receita) {
    return <div className={styles.snipper}></div>;
  }

  return (
    <div className={styles.box}>
      <div className={styles.detailBox}>
        <img src={receita.strMealThumb} alt={receita.strMeal} width="400" />
        <h1>{receita.strMeal}</h1>
        <p>Categoria: {receita.strCategory}</p>
        <h2>Ingredientes</h2>
        <ul className={styles.ingredientes}>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((i) => {
            const ingredient = receita[`strIngredient${i}`];
            const measure = receita[`strMeasure${i}`];
            return ingredient ? (
              <li key={i}>{`${ingredient} - ${measure}`}</li>
            ) : null;
          })}
        </ul>
        <h2>Instruções</h2>
        <p>{receita.strInstructions}</p>
        <button onClick={() => navigate("/")}>Voltar à Página de Home</button>
      </div>
    </div>
  );
};

export default RecipeDetails;
