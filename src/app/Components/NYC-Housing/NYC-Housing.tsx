import React from "react";
import { Image } from "@nextui-org/react";

export default function NYC_Housing() {
    return (
        <div className="min-h-screen bg-white flex flex-col justify-center items-center">
            <div className="py-8 px-10 mx-auto max-w-screen-2xl text-center lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm">
                    <h2 className="mb-2 text-3xl tracking-light font-bold text-gray-900">
                        NYC Housing Data Visualization
                    </h2>
                </div>
            </div>
            <div className="py-8 px-10 mx-auto text-center lg:py-16 lg:px-6 flex-col gap-3">
                <div className="mx-auto max-w-screen-2xl">
                    <div className="mb-10">
                        <Image
                            src="/NYC-Data-Tax-Class-1.jpg"
                            width={1000}
                            height={500}
                            alt="NYC Housing Data Visualization 1"
                        />
                    </div>
                    <div className="mb-10">
                        <Image 
                            src="/NYC-Data-Tax-Class-2.jpg"
                            width={1000}
                            height={500}
                            alt="NYC Housing Data Visualization 2"
                        />
                    </div>
                    <div>
                        <Image 
                            src="/NYC-Data-Tax-Class-4.jpg"
                            width={1000}
                            height={500}
                            alt="NYC Housing Data Visualization 3"
                        />
                    </div>
                </div>
            </div> 
            <section className="mb-8">
                <div className="max-w-3xl mx-auto text-left">
                    <h3 className="text-3xl font-bold mb-5">
                        Introduction
                    </h3>
                    <p className="text-gray-700 mb-10">
                        The primary objective of this visualization was to provide an insightful look into the evolution of property sales across the five different boroughs in New York City (NYC) over time further described by tax classes. Given the data set provided by the Rolling Sales Data from the NYC Department of finance and NYC Property Sales from Kaggle, this visualization intended to encompass the relationship between the interplay between time (the year a property was built), borough, sales price, and property tax classification. To establish and publicize this visualization, the following technologies were used: Python, Pandas, and NumPy for data cleaning and aggregating data as well as Visual Studio Code as the IDE for Python compilation. The cleaned data set was sent to Tableau to create the visualization itself. Finally, Google Drawings was used for the final markup and editing of the visualization. 
                    </p>
                </div>
            </section>
            <section className="mb-8">
                <div className="max-w-3xl mx-auto text-left">
                    <h3 className="text-3xl font-bold mb-5">
                        Design Choices and Visual Encodings
                    </h3>
                    <p className="text-gray-700 mb-10">
                        For the visualization type of this dataset, scatter plots were chosen due to their ability to depict individual data points, which allow users to discern patterns, clusters, and outliers within a dataset. In terms of the marks, the primary mark within the visualization is a point in the scatterplot, each point represents a property sale and other visual variables are position (year built and sale price) and color hue (tax class). The scatter plots are separated by borough to allow for users to visually and mentally categorize the data which allows for users to store and recall data insights. Additionally, the choice of the logarithmic scale on the y-axis addresses the issues within the data set of containing a large range of sale prices. Having a logarithmic scale on the y-axis allows for more extreme sale prices to be more visually digestible without overshadowing the broader data spectrum. <br /> <br /> Overall, by choosing these specific design choices and visual encodings, the visualization offloads cognition onto perception. Instead of having users interpret and analyze raw data trends through tables, users can instantly perceive trends, anomalies, and ultimately patterns within the property sale prices across different years, boroughs, and tax classes. Finally, labeling the extreme values (the maximum and minimum sale prices) reduces the overall cognitive load for users as users do not have to mentally extrapolate the possible range of referring to a legend, the information is simply available to a user. 
                    </p>
                </div>
            </section>
            <section className="mb-8">
                <div className="max-w-3xl mx-auto text-left">
                    <h3 className="text-3xl font-bold mb-5">
                        Data Cleaning and Aggregation
                    </h3>
                    <p className="text-gray-700">
                        Given the nature of the initial dataset, there were a couple of anomalies present within the dataset. The end decision was to remove outliers in sale price by removing the transition of deeds between family members (sale prices less than $100) as well as removing rows from the dataset where either sale prices, tax class, borough ID, or year built was missing. <br /><br /> In terms of data aggregation, given the data sets' grand granularity, sale prices were grouped by borough which ultimately allowed for borough-specific trends to be visualized and provided a segmented view of NYC's housing landscape. Additionally, rather than work with the vast array of sales prices as well as given that there were multiple sales prices within a year for the same tax class, I decided to calculate the median sale price for a given year, borough, and tax class. This choice was made with the idea that it would be robust against outliers, ensuring that the few extreme values present in the data set wouldn't skew the visualizations. By grouping the visualization further by tax class, this decision was made with the hope of further highlighting the difference in property types and their respective price dynamics. By separating the data set in these ways, I was able to create a visualization that dictates a clear, accurate, and insightful narrative of NYC's housing market. 

                    </p>
                </div>
            </section>
        </div>
    );
};
