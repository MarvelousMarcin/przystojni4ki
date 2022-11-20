import classes from "./RegistrationPage.module.css";
import arrow from "../../assets/arrow.png";
import { motion } from "framer-motion";
import { useRef } from "react";

const RegistrationPage = ({ setRegisterIsOpen, registerIsOpen }) => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordAgainRef = useRef(null);

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

  const handleRegisterBtn = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const response = await fetch("http://localhost:2000/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.json();
    } else {
      alert("error");
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
        <input ref={emailRef} placeholder="E-Mail" type="text" />
        <input ref={passwordRef} placeholder="Hasło" type="password" />
        <input
          ref={passwordAgainRef}
          placeholder="Powtórz Hasło"
          type="password"
        />
        <button onClick={handleRegisterBtn}>Stwórz konto</button>
      </form>

      <img
        alt=""
        src={arrow}
        onClick={() => setRegisterIsOpen((open) => !open)}
        className={classes.back}
      />
    </motion.section>
  );
};

export default RegistrationPage;
