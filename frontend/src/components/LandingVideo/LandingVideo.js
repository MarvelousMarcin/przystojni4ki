import classes from "./LandingVideo.module.css";
import video1 from "../../assets/test.mp4";

const LandingVideo = () => {
  return (
    <video
      className={classes.mainVid}
      src={video1}
      autoplay="true"
      muted="true"
      loop="true"
    />
  );
};

export default LandingVideo;
