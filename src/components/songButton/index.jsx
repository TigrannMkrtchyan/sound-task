import styles from "./songButton.module.scss";

const SongButton = ({ onClick, color}) => {

  return (
    <div
      style={{
        backgroundColor: `${color}`,
      }}
      onClick={onClick}
      className={styles.mainComponent}
    ></div>
  );
};

export default SongButton;
