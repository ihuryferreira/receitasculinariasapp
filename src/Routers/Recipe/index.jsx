/* 
  Criado Por Ihury Ferreira
*/

// Modulos
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// CSS Module
import styles from "./Recipe.module.css";

/**
 * Componente para exibir a lista de receitas na página principal.
 */

const Recipes = () => {
  // Armazenar lista de receitas
  const [receitas, setReceitas] = useState([]);
  const [pesquisa, setPesquisa] = useState("");

  useEffect(() => {
    // Função assicrona que busca os dados da api themealdb
    const fetchRecipes = async () => {
      try {
        
        let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
        
        // Verifica se usuário digitou o nome ex: chicken
        if (pesquisa) {
          url = `${url}${pesquisa}`;
          const response = await axios.get(url);
          // Atualiza o estado com as receitas encontradas
          if (response.data.meals) {
            setReceitas(response.data.meals);
          } else {
            // Se não encontrar por nome, busca por categoria ou tipo de prato.
            url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${pesquisa}`;
            const response = await axios.get(url);
            setReceitas(response.data.meals);
          }
        } else {
          // Atualiza o estado com as receitas encontradas
          const response = await axios.get(url);
          setReceitas(response.data.meals);
        }
      } catch (error) {
        console.error("Erro ao buscar as receitas:", error);
      }
    };

    fetchRecipes();
  }, [pesquisa]);

  return (
    <main className="flex flex-col place-items-center">
      <div className={styles.box}>
        <input
          type="text"
          placeholder="Pesquisar por nome ou tipo de prato"
          value={pesquisa}
          className={styles.inputPesquisa}
          onChange={(e) => setPesquisa(e.target.value)}
        />
      </div>
      <section className={`${styles.listItems}`}>
        {receitas &&
          receitas.map((receita, index) => (
            <div className={`${styles.boxItem} ${styles.boxItem}-${index + 1}`} key={receita.idMeal}>
              <h2>{receita.strMeal}</h2>
              <p>Categoria: {receita.strCategory}</p>
              <img
                src={receita.strMealThumb}
                alt={receita.strMeal}
                width="200"
              />
              <Link to={`/receitas/${receita.idMeal}`}>Ver Detalhes</Link>
            </div>
          ))}
      </section>
    </main>
  );
};

export default Recipes;
