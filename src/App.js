import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import ChosenDrink from "./components/ChosenDrink/ChosenDrink";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <ChosenDrink />
    </div>
  );
};

export default App;
