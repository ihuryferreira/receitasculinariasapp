import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <>
      <nav className={`${styles.navbar} navbar bg-gray-800`}>
        <header>
          <a className={styles.linkHome} href="/">
            <img src="/recipe.svg" alt="Logo Recipe" />
            <h1>Receitas Culinárias</h1>
          </a>
        </header>
      </nav>
    </>
  );
}

export default Menu;
