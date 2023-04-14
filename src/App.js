import React, { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";

export default function App() {


   const [catalog, setcatalog] = useState([
      {
         id: 1,
         name: "BMW"
      }
   ]);
   return (
      <div>
         <Header/>
         <Main/>
         <Footer/>
      </div>
   )
}