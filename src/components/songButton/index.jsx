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
    if (playing) {
      sound.pause();
    }
  }, [paused]);

  useEffect(() => {
    // sound.ended()
    // sound.ontransitionend()
    // sound.onplaying()
    // sound.onended()
    // sound.duration()

    if (playing) {
      sound.play();
    }
  }, [played]);

  const playSound = () => {
    sound.play();
    setPlaying(true);
  };

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
    ></div>
  );
};

export default SongButton;
