import { Route, Routes } from "react-router-dom";
import Splashscreen from "./SplashScreen";
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import Panier from "./panier";
import Services from "./services";
import { useEffect, useState } from 'react';
import { Animal } from './services'; // Importez le type Animal depuis services

export default function App() {
  
  const [count, setCount] = useState(0);
  const [panier, setPanier] = useState<Animal[]>(()=>{
    const store = localStorage.getItem('animal');
    return store ? JSON.parse(store) : []
  });
  
useEffect(() => {
  setCount(panier.length);
} , [panier])


  return (
    <>
      <Routes>
        <Route path="/" element={<Splashscreen />} />
        <Route path="/home" element={<Home   count={count} />} />
        <Route path="/services" element={<Services panier={panier} setPanier={setPanier} count={count} setCount={setCount} />} />
        <Route path="/contact" element={<Contact  count={count} />} />
        <Route path="/about" element={<About count={count}/>} />
        <Route path="/panier" element={<Panier panier={panier} count={count} />} />
      </Routes>
    </>
  );
}
