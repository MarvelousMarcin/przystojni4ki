import classes from "./LandingHeader.module.css";
import { motion } from "framer-motion";

const LandingHeader = ({ setMenuIsOpen, setRegisterIsOpen }) => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>HistQuiz</div>
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
