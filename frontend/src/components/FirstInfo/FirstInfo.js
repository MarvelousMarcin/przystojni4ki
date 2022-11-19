import classes from "./FirstInfo.module.css";
import FotoSlider from "../FotoSlider/FotoSlider";

const FirstInfo = () => {
  return (
    <section className={classes.firstInfo}>
      <h1>Najlepszy sposób na generowanie testów w internecie.</h1>
      <p>Wybierz opcje i wygeneruj plik w ułamku sekundy</p>

      <FotoSlider />
    </section>
  );
};

export default FirstInfo;
