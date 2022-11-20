import classes from "./LandingHeader.module.css";
import { motion } from "framer-motion";

const LandingHeader = ({ setMenuIsOpen, setRegisterIsOpen }) => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        Hist<span className={classes.outline}>Quiz</span>
      </div>
      <nav>
        <ul>
          <motion.li
            whileHover={{ scale: 1.1, color: "white" }}
            onClick={() => setMenuIsOpen((open) => !open)}
          >
            Zaloguj
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1, color: "white" }}
            onClick={() => setRegisterIsOpen((open) => !open)}
          >
            Stwórz konto
          </motion.li>
        </ul>
      </nav>
    </header>
  );
};

export default LandingHeader;
