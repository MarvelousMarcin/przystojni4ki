import classes from "./LoginPage.module.css";
import { motion } from "framer-motion";
import arrow from "../../assets/arrow.png";

const LoginPage = ({ menuIsOpen, setMenuIsOpen }) => {
  const loginVariants = {
    open: {
      x: 0,
      transition: {
        type: "bounce",
        staggerChildren: 0.2,
      },
    },
    hidden: {
      x: "-100%",
      transition: {
        type: "bounce",
      },
    },
  };

  return (
    <motion.section
      variants={loginVariants}
      initial="hidden"
      animate={menuIsOpen ? "open" : "hidden"}
      className={classes.login}
    >
      <section className={classes.section}>
        <h1>Logowanie</h1>
        <form className={classes.login_form}>
          <motion.input
            whileFocus={{ scale: 1.1, borderBottomColor: "#2a9d8f" }}
            placeholder="E-mail"
            type="text"
          />
          <motion.input
            whileFocus={{ scale: 1.06, borderBottomColor: "#2a9d8f" }}
            placeholder="Hasło"
            type="text"
          />
          <motion.button whileHover={{}} className={classes.btn}>
            Zaloguj
          </motion.button>
        </form>
      </section>
      <img
        src={arrow}
        onClick={() => setMenuIsOpen((open) => !open)}
        className={classes.back}
      />
    </motion.section>
  );
};

export default LoginPage;
