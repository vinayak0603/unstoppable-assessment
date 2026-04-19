import React from 'react';
import client1 from '../assets/clients/client1.png';
import client2 from '../assets/clients/client2.png';
import client3 from '../assets/clients/client3.png';
import client4 from '../assets/clients/client4.jpg';
import client5 from '../assets/clients/client5.png';
import client6 from '../assets/clients/client6.png';

const TrustedBy = () => {
    // Array designed to match the 2-row layout (10 items total) to replicate the look of the provided image perfectly.
    const logos = [
        client1, client2, client3, client4, client5,
        client6, client3, client4, client1, client2
    ];

    return (
        <section className="w-full min-h-[50vh] flex flex-col justify-center bg-white py-12 md:py-20 px-5 md:px-12 xl:px-20 font-sans">
            <div className="max-w-[85rem] mx-auto w-full flex flex-col text-center">

                {/* Header Section */}
                <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-black tracking-tight leading-tight">
                    Tr<span className="text-[#cc0000] font-serif italic font-normal">us</span>ted By Businesses
                </h2>

                <p className="text-[15px] md:text-[17px] text-black font-medium leading-[1.6] mt-4 max-w-xl mx-auto opacity-80">
                    From strategy to execution we help brands<br className="hidden md:block" />
                    scale, stand out, and stay consistent.
                </p>

                {/* Logos Grid */}
                <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 gap-y-8 md:gap-y-12 gap-x-4 md:gap-x-12 place-items-center mt-10 md:mt-24 max-w-5xl mx-auto w-full">
                    {logos.map((logo, index) => (
                        <div 
                            key={index} 
                            className={`flex justify-center items-center w-full h-full ${index === logos.length - 1 ? 'col-start-2 md:col-auto' : ''}`}
                        >
                            <img
                                src={logo}
                                alt={`Client logo ${index + 1}`}
                                className="h-8 sm:h-10 md:h-12 w-auto object-contain max-w-[140px] md:max-w-[160px]"
                            />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TrustedBy;
