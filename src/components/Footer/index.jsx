import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className="flex flex-col h-full bg-gray-800">
      <div>
        <p className={`flex justify-center items-center p-7 gap-3 text-fuchsia-50 ${styles.fontSize}`}>
          © 2024
          <a
            href="/"
            className="flex gap-1 text-l text-slate-600 hover:text-fuchsia-50"
          >
            Receitas Culinárias
          </a>{" "}
          Todos os direitos reservados{" "}
        </p>
      </div>
    </footer>
  );
}

export default Footer;