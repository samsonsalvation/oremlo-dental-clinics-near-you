import advertBg from '../assets/images/advertBg.png';

const Advert = () => {
    return (
        <section className='items-center justify-center mx-auto max-w-5xl mb-20 mt-20 px-4'> 
            <div className="relative py-32 px-12 border rounded-2xl overflow-hidden text-white bg-cover bg-center" style={{ backgroundImage: `url(${advertBg})` }}>
                <div className='relative z-10 max-w-sm flex flex-col gap-2'> 
                    <h1 className='font-[family-name:var(--font-schibsted)] font-bold text-wrap text-4xl'> Simple. Transparent. Hassle-Free. </h1>
                    <p> From finding a clinic to confirming your appointment, everything just works.</p>
                    <button className='font-bold bg-[#14B8A6] border border-transparent rounded-md px-8 py-4 w-fit'> Find A Clinic </button>
                </div>
                <div className='absolute inset-0 bg-gradient-to-r from-black/90  to-black/5'></div>

            </div>
        </section>
    )
};
export default Advert;