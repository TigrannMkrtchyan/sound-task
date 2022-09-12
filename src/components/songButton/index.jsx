import styles from "./songButton.module.scss";

const SongButton = ({ color, song }) => {
  const sound = new Audio(song);

  const playSound = () => {
    sound.play();
  };

  const interruptSound = () => {
    sound.pause();
    sound.currentTime = 0;
  };

  const play = () => {
    interruptSound();
    playSound();
  };

  return (
    <div
      style={{
        backgroundColor: `${color}`,
      }}
      onClick={play}
      className={styles.mainComponent}
    ></div>
  );
};

export default SongButton;
