import React, { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Header from "./components/Header";


export default function App() {

 const  [catalog, setcatalog] = useState([
   
      {
         id: 1,
         img: require('../src/img/BMWX1.jpg'),
         Brand: "BMW",
         Model: "X1",
         Year: 2010,
         Gearbox: "автомат",
         Fuel: "дизель",
         Engine_L: "2.0",
         Body_style: "внедорожник",
         Price: 50,
         Bookmark: false
      },
      {
         id: 2,
         img: require('../src/img/MersVivo.jpg'),
         Brand: "Mercedes-Benz",
         Model: "Vivo",
         Year: 2010,
         Gearbox: "автомат",
         Fuel: "дизель",
         Engine_L: "2.0",
         Body_style: "внедорожник",
         Price: 65,
         Bookmark: false
      }
   ]);

   return (
      <div>
         <Header/>
         <Main catalog={catalog} setcatalog={setcatalog}/>
         <Footer/>
      </div>
   )
}