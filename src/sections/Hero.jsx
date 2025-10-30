import { useState } from "react";
import backgroundImage from "../assets/images/herobackground.png"

const Hero = () => {
    const [location, setLocation] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();};
        
    function handleInputChange(e) {
        setLocation(e.target.value);
    }

    return (
        <section className="bg-[#0F172A] mt-0 text-white pt-32 pb-40 px-6 md:py-32 md:px-16 flex flex-col gap-6 overflow-hidden relative">
            <div className="flex flex-col gap-1">
                <h1 className="font-[family-name:var(--font-schibsted)] text-2xl sm:text-4xl font-extrabold"> Find the Right Dental Clinic.</h1>
                <h1 className="font-[family-name:var(--font-schibsted)] text-2xl sm:text-4xl font-extrabold"> Fast, Easy & Affordable. </h1>
                <p className="text-[#B6E9E3] text-sm">Compare top-rated clinics in Nigeria and book your dental appointment in minutes</p>
            </div>
            <div className="">
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                    <input 
                    type="text"
                     placeholder="Enter your location" 
                     value={location} onChange={handleInputChange} className="px-16 py-4 border rounded-md text-black"/>
                    <button type="submit" onClick={handleSubmit} className="bg-[#14B8A6] px-16 py-4 border border-transparent rounded-md">Search</button>
                </form>
            </div>
            <img src={backgroundImage} alt="Hero Background" className="absolute right-0 select-none pointer-events-none h-[200px] w-auto md:h-[400px] md:w-auto bottom-0 md:top-12"/>
        </section>
    )
};

export default Hero;