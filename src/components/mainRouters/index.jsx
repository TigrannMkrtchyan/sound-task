import { Routes, Route } from "react-router-dom";
import { songsList } from "../../data/data";
import Board from "../board";

const MainRoutes = () => {
  return (
    <Routes>
      {songsList.map((value) => (
        <Route path={value.path} element={<Board songs={value.data} />}></Route>
      ))}
    </Routes>
  );
};

export default MainRoutes;
