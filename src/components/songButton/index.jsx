import { useEffect, useState } from "react";
import styles from "./songButton.module.scss";

const SongButton = ({ speed, color, song, interrupt, paused, played }) => {
  const [sound] = useState(new Audio(song));
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    sound.playbackRate = speed;
  }, [speed, sound]);

  useEffect(() => {
    interruptSound();
  }, [interrupt]);

  useEffect(() => {
    sound.pause();
  }, [paused]);

  useEffect(() => {
    if (playing) {
      sound.play();
    }
  }, [played]);

  const playSound = () => {
    sound.play();
    setPlaying(true);
  };

  sound.addEventListener("ended", (event) => {
    setPlaying(false);
  });

  const interruptSound = () => {
    setPlaying(false);
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
    />
  );
};

export default SongButton;
