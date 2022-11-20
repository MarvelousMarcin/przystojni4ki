import classes from "./LoginPage.module.css";
import { motion } from "framer-motion";
import arrow from "../../assets/arrow.png";
import { useRef, useState } from "react";
import { useNavigate } from "react-router";

const LoginPage = ({ menuIsOpen, setMenuIsOpen }) => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  const [isDataCorrect, setIsDataCorrect] = useState(true);
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

  const errorVariants = {
    good: {
      scale: 0,
      transition: {
        type: "spring",
      },
    },
    bad: {
      scale: 1,
      transition: {
        type: "spring",
      },
    },
  };

  const handleLogIn = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const response = await fetch("http://localhost:4000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      navigate("/logged");
    } else {
      setIsDataCorrect(false);
      emailRef.current.value = "";
      passwordRef.current.value = "";
    }
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
            ref={emailRef}
            whileFocus={{ scale: 1.1, borderBottomColor: "#2a9d8f" }}
            placeholder="E-mail"
            type="text"
          />
          <motion.input
            ref={passwordRef}
            whileFocus={{ scale: 1.06, borderBottomColor: "#2a9d8f" }}
            placeholder="Hasło"
            type="password"
          />

          <motion.p
            variants={errorVariants}
            initial="good"
            animate={isDataCorrect ? "good" : "bad"}
            className={classes.error}
          >
            Błędne dane logowania
          </motion.p>

          <motion.button
            onClick={handleLogIn}
            whileHover={{
              scale: 1.08,
              transition: {
                type: "spring",
                stiffness: 700,
              },
            }}
            className={classes.btn}
          >
            Zaloguj
          </motion.button>
        </form>
      </section>
      <img
        alt=""
        src={arrow}
        onClick={() => {
          setMenuIsOpen((open) => !open);
          setIsDataCorrect(true);
        }}
        className={classes.back}
      />
    </motion.section>
  );
};

export default LoginPage;
