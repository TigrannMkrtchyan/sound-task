import React from "react";
import MainRoutes from "./components/mainRouters";
import NavigationBar from "./components/navigationBar";
import { BrowserRouter } from "react-router-dom";
import './app.scss'


function App() {
  return (<BrowserRouter>
    <NavigationBar />
    <MainRoutes />
  </BrowserRouter>
  );
}

export default App;
