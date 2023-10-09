import React from "react"; 

export default function Footer() {

    return (
    <footer className="bg-white rounded-lg shadow">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
                <a href="/" className="flex items-center mb-4 sm:mb-0">
                    <img src="https://www.datalabsagency.com/wp-content/uploads/2022/01/Data-Visualization-Types-Nodes-Links-01-600x797.png" className="h-10 mr-3" alt="Data Visualization Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap">COMP_SCI 333</span>
                </a>
                <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
                    <li>
                        <a href="/" className="mr-4 hover:underline md:mr-6 ">Home</a>
                    </li>
                    <li>
                        <a href="/NYC-Housing-Data" className="mr-4 hover:underline md:mr-6">NYC Housing Data</a>
                    </li>
                    {/* <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Contact</a>
                    </li> */}
                </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center">© 2023 <a href="https://www.linkedin.com/in/ethanpineda/" target="_blank" className="hover:underline">Ethan Pineda™</a>. All Rights Reserved.</span>
        </div>
    </footer>
    );
};