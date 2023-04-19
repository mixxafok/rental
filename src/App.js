import React, { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Header from "./components/Header";


export default function App() {

   return (
      <div>
         <Header/>
         <Main />
         <Footer/>
      </div>
   )
}