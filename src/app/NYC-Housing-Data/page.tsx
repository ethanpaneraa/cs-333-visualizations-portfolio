"use client"; 
import NYC_Housing from "../Components/NYC-Housing/NYC-Housing";
import { NextUIProvider } from "@nextui-org/react";

export default function Page() {
    return (
        <>
            <NextUIProvider>
                <NYC_Housing />
            </NextUIProvider>
        </>
    );
};