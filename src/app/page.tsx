"use client"; 
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import { NextUIProvider } from "@nextui-org/react";
export default function Home() {
  return (
    <>
      <NextUIProvider>
        <NavBar />
        <Footer /> 
      </NextUIProvider>
    </>
  )
}
