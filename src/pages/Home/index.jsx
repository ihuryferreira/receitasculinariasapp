// Module de Roteamento de navegação
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Module Componentes da página
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
// Rotas de Receita e Receita detalhadas.
import Recipes from "../../Routers/Recipe";
import RecipeDetails from "../../Routers/RecipeDetails";

// CSS Module
import styles from './Container.module.css';

/**
 * Página Home
 * O componente Home define a estrutura e a navegação principal da aplicação.
 * O Router para renderizar as páginas corretas conforme o endereço da url.
 */

const Home = () => {
  return (
    <Router>
      <div className={styles.container}>
        <Menu />
        <div>
          <Routes>
            <Route path="/" element={<Recipes />} />
            <Route path="/receitas/:id" element={<RecipeDetails/>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default Home;
