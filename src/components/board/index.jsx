// import { useEffect, useState } from "react";
// import Button from "../button";
import SongButton from "../songButton";

import styles from "./board.module.scss";

const Board = ({ songs }) => {
  // const [sound, setSound] = useState(new Audio(songs[0]));
  // const [speed, setSpeed] = useState(1);

  // useEffect(() => {
  //   sound.playbackRate = speed;
  // }, [speed, sound]);

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

  // const playSound = () => {
  //   sound.play();
  // };
  // const pauseSound = () => {
  //   sound.pause();
  // };

  // const interruptSound = () => {
  //   sound.pause();
  //   sound.currentTime = 0;
  // };

  // const changeSpeed = (divison) => {
  //   let res = speed;
  //   if (divison && speed !== 0.5) {
  //     res = speed / 2;
  //   }
  //   if (!divison && speed !== 2) {
  //     res = speed * 2;
  //   }

  //   setSpeed(res);
  // };

  // const changeSound = (arg) => {
  //   interruptSound();
  //   setSound(new Audio(arg));
  // };

  return (
    <div>
      <div className={styles.component}>
        <div className={styles.mainComponent}>
          {songs.map((value, index) => (
            <SongButton
              song={value}
              // onClick={() => changeSound(value)}
              color={backColors(index)}
            />
          ))}
        </div>
      </div>
      {/* <div className={styles.component}>
        <Button onClick={playSound} text={"play"} />
        <Button onClick={pauseSound} text={"pause"} />
        <Button onClick={() => changeSpeed(true)} text={"slow down"} />
        <Button onClick={() => changeSpeed(false)} text={"speed up"} />
        <Button onClick={interruptSound} text={"interrupt"} />
      </div> */}
    </div>
  );
};

export default Board;
