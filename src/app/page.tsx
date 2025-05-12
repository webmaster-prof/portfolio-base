'use client';

import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import Hero from "../../components/Hero/Hero"
import Scills from "../../components/Scills/Scills";
import Works from "../../components/Works/Works";
import { useEffect } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Home() {


  useEffect(() => {
    window.scrollTo(0, 0);
 }, [])


 useEffect(() => {
    const initAos = async () => {
        await import('aos')
        AOS.init({
          duration: 1000,
          once: true,
          easing: 'ease',
          offset: 100,
          anchorPlacement: 'top-bottom',
        });
    }
    initAos()
 }, [])



  return (
    <main>
      <Hero />
      <About />
      <Scills />
      <Works />
      <Contact />
    </main>
  );
}
