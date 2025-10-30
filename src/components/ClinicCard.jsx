import { clinicInfo } from "../constants";
import {MapPin, ChevronRight} from 'lucide-react';

const ClinicBento = () => {
  return (
    <section className="w-full overflow-hidden py-6 md:align-center md:max-w-5xl md:mx-auto">
      <div className="flex md:grid gap-4 overflow-x-auto md:overflow-visible scroll-smooth snap-x snap-mandatory md:grid-cols-3 no-scrollbar">
        {clinicInfo.map((clinic, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden min-w-[250px] max-w-[300px] md:max-w-[350px] flex-shrink-0 snap-center shadow-md hover:shadow-lg transition-shadow duration-300 px-2 py-2"
          >
            <img
              src={clinic.image}
              alt={`${clinic.name} clinic`}
              className="w-full h-auto object-cover"
            />

            <div className="p-3 text-start flex flex-col gap-1">
              <h1 className="font-semibold text-gray-800 text-lg">
                {clinic.name}
              </h1>
              <div className="flex items-center gap-2"> 
                <p className=""> <MapPin className="h-[16px] w-auto" /></p>
                <p className="text-gray-600 text-sm">{clinic.location}</p>
                </div>
              <p className="text-gray-700 text-sm mt-1">
                Rating: {clinic.rating} ⭐
              </p>
            </div>

            <div className="p-3">
              <button className="bg-[#14B8A6] px-6 py-2 border border-transparent rounded-md text-white mt-2 w-full hover:bg-[#0d8f83] transition-colors duration-200">
                View details
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="border-b border-[#084D46] w-fit  mx-auto flex items-center gap-2 mt-20 py-2 cursor-pointer hover:scale-105 transition-transform duration-200"> 
            <button className="font-semibold"> Explore More Clinics </button>
            <p> <ChevronRight />  </p>
      </div>
      
    </section>
  );
};

export default ClinicBento;
