import ClinicBento from "../components/ClinicCard";

const TopClinics = () => {
  return (
    <section className="bg-[#E8F8F6] py-16 px-4 md:px-12 text-center mb-10">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-6">
        <h2 className="text-[#4D4D45] font-medium text-lg">Popular Clinics</h2>
        <h1 className="font-semibold italic text-3xl md:text-4xl leading-snug text-gray-800 max-w-3xl">
          Only the top 5% of dental clinics make this list. You're in expert hands.
        </h1>

        <div className="w-full">
          <ClinicBento />
        </div>
      </div>
    </section>
  );
};

export default TopClinics;
