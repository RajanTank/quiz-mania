import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RulesPage from "./pages/RulesPage";
import QuizPage from "./pages/QuizPage";
import { Outlet, } from 'react-router-dom';
import QuizMania from './assets/QUIZMania.svg';

const App = () => {
  return (
    <main >
      <header className="bg-[#F3F3E9] py-5 px-8 shadow-sm">
        <img src={QuizMania} className="logo react" alt="React logo" />
      </header>
      <Outlet />
    </main>
  );
};

export default App;