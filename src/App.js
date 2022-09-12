import Board from "./components/board";
import { songs, songs2 } from "./data/data";

function App() {
  return (
    <div >
      <Board songs={songs} />
      <Board songs={songs2} />
    </div>
  );
}

export default App;
