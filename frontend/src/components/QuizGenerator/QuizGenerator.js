import classes from "./QuizGenerator.module.css";
import { motion } from "framer-motion";
import { useState } from "react";
import pdf from "../../assets/pdf.png";
import docx from "../../assets/docx.png";
import arrow from "../../assets/arrow.png";
import { useNavigate, useNavigation } from "react-router";

const QuizGenerator = () => {
  const [isOn, setIsOn] = useState(false);
  const navigate = useNavigate();

  const toggleSwitch = () => setIsOn(!isOn);

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  return (
    <section className={classes.generator}>
      <img
        alt=""
        src={arrow}
        onClick={() => {
          navigate("/");
        }}
        className={classes.back}
      />
      <h1>Wygeneruj Quiz</h1>
      <form className={classes.form}>
        <input placeholder="Liczba pytań" type="number" />
        <input placeholder="Rok" type="number" />
        <input placeholder="Poziom trudności" type="text" />

        <motion.button
          whileHover={{
            scale: 1.08,
            transition: {
              type: "spring",
              stiffness: 700,
            },
          }}
          data-isOn={isOn}
        >
          Generuj
        </motion.button>
      </form>
      <section className={classes.section}>
        <img src={pdf} />
        <div className={classes.switch} onClick={toggleSwitch} data-isOn={isOn}>
          <motion.div className={classes.handle} layout transition={spring} />
        </div>
        <img src={docx} />
      </section>
    </section>
  );
};

export default QuizGenerator;
