import { useState } from "react";
import "./App.css";
import FormIMC from "./components/FormIMC.jsx";

export default function App() {
  

  return (
    <>
      <FormIMC title={"Saiba seu IMC"}/>
      <FormIMC title={"Calcule seu IMC"}/>
    </>
  );
}