"use client"; 
import NYC_Housing from "../Components/NYC-Housing/NYC-Housing";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";
import { NextUIProvider } from "@nextui-org/react";

export default function Page() {
    return (
        <>
            <NextUIProvider>
                <NavBar /> 
                <NYC_Housing />
                <Footer /> 
            </NextUIProvider>
        </>
    );
};