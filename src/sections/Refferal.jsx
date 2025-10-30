import refferalImage from "../assets/images/refferalImage.png"
import {ChevronRight} from 'lucide-react';

const Refferal = () => {
    return (
        <section className="bg-[#EBF4FB] grid md:flex items-start mx-auto justify-center gap-12 px-6 md:px-16 py-20 mb-10"> 
            <div className="text-[#4D4D45]  lg:max-w-[42%] flex flex-col gap-4"> 
                <h1> REFER AND EARN </h1>
                <h3 className="text-3xl md:text-5xl font-semibold"> Smiles are better when shared. 
                    <span className="text-[#F4A261]"> Refer, </span> book, and  <span className="text-[#F4A261]"> earn </span> rewards with DentalScaner.</h3>
                <div className="border-b border-[#14B8A6] w-fit flex gap-2 py-2 cursor-pointer hover:scale-105 transition-transform duration-200"> 
                    <h3> Get Started </h3>
                    <p> <ChevronRight />  </p>
                </div>
            </div>
            <div className="lg:max-w-[45%]"> 
                <img src={refferalImage} alt="How it works video placeholder" className="border border-transparent rounded-xl" />
            </div>
        </section>
    )
};
export default Refferal;