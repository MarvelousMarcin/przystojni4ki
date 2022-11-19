import classes from "./LandingHeader.module.css";

const LandingHeader = () => {
  return (
    <header className={classes.header}>
      <div>HistQuiz</div>
      <nav>
        <ul>
          <li>Zaloguj</li>
          <li>Stwórz konto</li>
        </ul>
      </nav>
    </header>
  );
};

export default LandingHeader;
