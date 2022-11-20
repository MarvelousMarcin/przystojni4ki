import classes from "./RegistrationPage.module.css";
import arrow from "../../assets/arrow.png";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

const RegistrationPage = ({ setRegisterIsOpen, registerIsOpen }) => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordAgainRef = useRef(null);

  const [isRegisterDataGood, setIsRegisterDataGood] = useState(true);

  const registerVariants = {
    open: {
      x: "0",
      transition: {
        type: "bounce",
        staggerChildren: 0.2,
      },
    },
    hidden: {
      x: "100%",
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

  const handleRegisterBtn = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const password2 = passwordAgainRef.current.value;

    if (password != password2) {
      return;
    }

    const response = await fetch("http://localhost:4000/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.json();
    } else {
      setIsRegisterDataGood(false);
    }
  };

  return (
    <motion.section
      className={classes.registr}
      variants={registerVariants}
      initial="hidden"
      animate={registerIsOpen ? "open" : "hidden"}
    >
      <form className={classes.regisForm}>
        <h1>Stwórz konto</h1>
        <motion.input
          whileFocus={{ scale: 1.1, borderBottomColor: "#2a9d8f" }}
          ref={emailRef}
          placeholder="E-Mail"
          type="text"
        />
        <motion.input
          whileFocus={{ scale: 1.1, borderBottomColor: "#2a9d8f" }}
          ref={passwordRef}
          placeholder="Hasło"
          type="password"
        />
        <motion.input
          whileFocus={{ scale: 1.1, borderBottomColor: "#2a9d8f" }}
          ref={passwordAgainRef}
          placeholder="Powtórz Hasło"
          type="password"
        />
        <motion.p
          style={{ color: "red" }}
          className={classes.err}
          variants={errorVariants}
          initial="good"
          animate={isRegisterDataGood ? "good" : "bad"}
        >
          Błędne dane rejestracji
        </motion.p>
        <motion.button
          whileHover={{
            scale: 1.08,
            transition: {
              type: "spring",
              stiffness: 700,
            },
          }}
          onClick={handleRegisterBtn}
        >
          Stwórz konto
        </motion.button>
      </form>

      <img
        alt=""
        src={arrow}
        onClick={() => {
          setRegisterIsOpen((open) => !open);
          setIsRegisterDataGood(true);
        }}
        className={classes.back}
      />
    </motion.section>
  );
};

export default RegistrationPage;
