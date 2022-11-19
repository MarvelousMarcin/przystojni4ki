import classes from "./SecondSection.module.css";
import video from "../../assets/solving.mp4";

const SecondSection = () => {
  return (
    <section className={classes.section}>
      <video src={video} autoplay="true" muted="true" loop="true" />
      <article className={classes.article}>
        <p>Generator Quizów</p>
        <h1>Tworzenie quizów nigdy nie było tak proste</h1>
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae
          tellus sit amet augue eleifend finibus a ac massa. In tempor erat nec
          erat gravida, vitae rutrum odio finibus.
        </h3>
      </article>
    </section>
  );
};

export default SecondSection;
