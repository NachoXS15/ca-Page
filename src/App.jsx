import React from "react";
import "bootswatch/dist/litera/bootstrap.min.css";
import './App.css'
import Header from "./components/Header";
import Router from "./routes/routes";
import { BrowserRouter } from "react-router-dom";
function App() {

  return (
    <>
      <BrowserRouter>
        <Header>
          <Router/>
        </Header>
      </BrowserRouter>
    </>
  )
}

export default App
