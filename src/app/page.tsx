"use client"; 
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import HomeComponent from "./Components/Home/Home";
import { NextUIProvider } from "@nextui-org/react";


export default function Home() {
  return (
    <>
      <NextUIProvider>
        <NavBar />
        <HomeComponent />
        <Footer /> 
      </NextUIProvider>
    </>
  )
}
