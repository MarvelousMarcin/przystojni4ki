import classes from "./FotoSlider.module.css";

import fot1 from "../../assets/fot1.jpg";
import fot2 from "../../assets/fot2.jpg";
import fot3 from "../../assets/fot3.jpg";

const FotoSlider = () => {
  return (
    <section className={classes.section}>
      <div className={classes.box}>
        <img src={fot1} alt="" />
        <h3>Szybkość</h3>
      </div>
      <div className={classes.box}>
        <img src={fot2} alt="" />
        <h3>Łatwość</h3>
      </div>
      <div className={classes.box}>
        <img src={fot3} alt="" />
        <h3>Gwarancja jakości</h3>
      </div>
    </section>
  );
};

export default FotoSlider;
