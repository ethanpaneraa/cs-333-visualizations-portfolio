import React from "react"; 
import { Link } from "@nextui-org/react";

export default function Here() {

    return (
	<section className="">
		<div className="container flex flex-col items-center justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
			<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
				<h1 className="text-5xl font-bold leadi sm:text-6xl">hey there! 
				</h1>
				<p className="mt-6 mb-8 text-lg sm:mb-12">My name is <Link href="https://ethanpaneraa.github.io/Ethan/" target="_blank" showAnchorIcon>Ethan Piñeda</Link>. Welcome to my Data Visualization Portfolio. I am an aspiring Software Engineer with an interest in Data Science and Data Visualization. I am currently a Junior at Northwestern University where I am pursuing a BA/MS in Computer Science. 
				</p>
				<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
					<a rel="noopener noreferrer" href="/NYC-Housing-Data" className="px-8 py-3 text-lg font-semibold rounded bg-blue-200">My Work</a>
					<a rel="noopener noreferrer" href="https://www.linkedin.com/feed/" target="_blank" className="px-8 py-3 text-lg font-semibold border rounded bg-blue-300">Contact Me</a>
				</div>
			</div>
			<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
				<img src="assets/svg/Business_SVG.svg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
			</div>
		</div>
	</section>
    );
};