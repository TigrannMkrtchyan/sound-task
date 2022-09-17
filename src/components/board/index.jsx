import { useState } from "react";
import Button from "../button";
import SongButton from "../songButton";

import styles from "./board.module.scss";

const Board = ({ songs }) => {
  const [speed, setSpeed] = useState(1);
  const [interrupt, setInterrupt] = useState(true);
  const [paused, setPaused] = useState(true);
  const [played, setPlayed] = useState(false);

  const backColors = (arg) => {
    const colors = ["red", "green", "yellow", "blue", "black"];
    let res = Math.floor(arg / 5);

    const recursion = (arg) => {
      if (arg >= colors.length) {
        res = arg - 5;
        recursion(res);
      } else {
        return res;
      }
    };

    recursion(res);
    return colors[res];
  };

  const playSound = () => {
    setPlayed(!played);
  };
  const pauseSound = () => {
    setPaused(!paused);
  };

  const interruptSound = () => {
    setInterrupt(!interrupt);
  };

  const changeSpeed = (divison) => {
    let res = speed;
    if (divison && speed !== 0.5) {
      res = speed / 2;
    }
    if (!divison && speed !== 2) {
      res = speed * 2;
    }

    setSpeed(res);
  };

  return (
    <div>
      <div className={styles.component}>
        <div className={styles.mainComponent}>
          {songs.map((value, index) => (
            <SongButton
              interrupt={interrupt}
              song={value}
              speed={speed}
              color={backColors(index)}
              paused={paused}
              played={played}
            />
          ))}
        </div>
      </div>
      <div className={styles.component}>
        <Button onClick={playSound} text={"play"} />
        <Button onClick={pauseSound} text={"pause"} />
        <Button onClick={() => changeSpeed(true)} text={"slow down"} />
        <Button onClick={() => changeSpeed(false)} text={"speed up"} />
        <Button onClick={interruptSound} text={"interrupt"} />
      </div>
    </div>
  );
};

export default Board;
