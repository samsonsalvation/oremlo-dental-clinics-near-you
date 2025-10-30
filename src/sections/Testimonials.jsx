import { testimonials } from "../constants";
import { Star } from 'lucide-react';

const Testimonials = () => {
    return (
        <div className="grid gap-8 items-center justify-center mx-auto text-center mt-20 mb-20 px-2"> 
            <div className="grid gap-4 items-center justify-center mx-auto"> 
                    <h2 className="text-[#4D4D45] font-medium text-lg">What our customers say</h2>
                    <h1 className="font-semibold italic text-2xl md:text-4xl leading-snug text-gray-800 max-w-3xl">
                            Trusted by thousands across Nigeria to make dental care safer, simpler, and more affordable.
                    </h1>
            </div>
            <section className="w-full overflow-hidden py-6 md:items-center justify-center md:max-w-6xl mx-auto ">
                <div className="flex md:grid overflow-x-auto  scroll-smooth snap-x snap-mandatory no-scrollbar lg:grid-cols-3 sm:grid-cols-2 md:gap-4 gap-4">
                 {testimonials.map((testimonial, index) => (
                    <div key={index} className=" w-auto min-w-[350px] h-full p-6 text-left grid gap-4 border border-[#D8D8D8] rounded-lg shadow-md"> 
                        <div className="flex">
                             <Star className="text-[#FF7F22] fill-current stroke-none" /> 
                             <Star className="text-[#FF7F22] fill-current stroke-none" /> 
                             <Star className="text-[#FF7F22] fill-current stroke-none" />
                             <Star className="text-[#FF7F22] fill-current stroke-none" />  
                             <Star className="text-[#FF7F22] fill-current stroke-none" />  
                        </div>
                        <p className="text-gray-800 text-md tracking-wide"> {testimonial.text} </p>
                        <div className="flex items-center space-x-4">
                            <img src={testimonial.image} alt={testimonial.user} className="w-10 h-10 border border-neutral-400 rounded-full" />
                            <div> 
                                <h3 className="text-md text-neutral-900 font-semibold">{testimonial.user}</h3>
                                <p className="text-sm text-neutral-80">{testimonial.company}</p>
                                </div>
                             </div>
                    </div>

                ))}
                </div>
            </section> 
        </div>
    )
};

export default Testimonials;