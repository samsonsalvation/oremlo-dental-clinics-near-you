import NavBar from "../components/NavBar";
import Hero from "../sections/Hero";
import TopClinics from "../sections/TopClinics";
import Advert from "../sections/Advert";
import HowWorks from "../sections/HowWorks";
import Testimonials from "../sections/Testimonials";
import Refferal from "../sections/Refferal";

const Home = () => {
    return (
        <div className="">
            <NavBar />
            <div className="mt-10"> 
                 <Hero />
                 <TopClinics />
                 <Advert />
                 <HowWorks />
                 <Testimonials />
                 <Refferal />
                 
            </div>
           
        
        </div>
    )
}

export default Home;