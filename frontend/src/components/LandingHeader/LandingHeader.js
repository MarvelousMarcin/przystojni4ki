import classes from "./LandingHeader.module.css";

const LandingHeader = ({ setMenuIsOpen }) => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>HistQuiz</div>
      <nav>
        <ul>
          <li onClick={() => setMenuIsOpen((open) => !open)}>Zaloguj</li>
          <li>Stwórz konto</li>
        </ul>
      </nav>
    </header>
  );
};

export default LandingHeader;
