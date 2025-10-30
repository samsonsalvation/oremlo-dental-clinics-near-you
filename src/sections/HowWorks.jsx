import blackNurse from "../assets/images/blackNurse.png"
import {ChevronRight} from 'lucide-react';

const HowWorks = () => {
    return (
        <section className="bg-[#0F172A] grid md:flex md:flex-row-reverse items-start mx-auto justify-center gap-12 px-6 md:px-16 py-20 mb-10"> 
            <div className="text-white  lg:max-w-[42%] flex flex-col gap-4"> 
                <h1> WATCH HOW IT WORKS </h1>
                <h3 className="text-3xl md:text-5xl font-semibold"> Discover how we’re transforming dental care for
                    <span className="text-[#F4A261]"> patients </span> and  <span className="text-[#F4A261]"> clinics </span> alike. </h3>
                <div className="border-b border-[#14B8A6] w-fit flex gap-2 py-2 cursor-pointer hover:scale-105 transition-transform duration-200"> 
                    <h3> Try Now </h3>
                    <p> <ChevronRight />  </p>
                </div>
            </div>
            <div className="lg:max-w-[45%]"> 
                <img src={blackNurse} alt="How it works video placeholder" className="border border-transparent rounded-xl" />
            </div>
        </section>
    )
};
export default HowWorks;