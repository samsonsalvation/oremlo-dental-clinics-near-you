import Logo from '../assets/logos/oremlo.svg';
import ClinicOne from '../assets/images/clinicOne.png';
import ClinicTwo from '../assets/images/clinicTwo.png';
import ClinicThree from '../assets/images/clinicThree.png';
import user1 from '../assets/images/user1.jpg';
import user2 from '../assets/images/user2.jpg';
import user3 from '../assets/images/user3.jpg';

export const navLinks = [
    { label: 'For Providers', url: '/' },
    { label: 'Services', url: '/services' },
    { label: 'Contact Us', url: '/contact' },
];

export const clinicInfo = [
    { name:"Smile Dental Clinic", location: "Zero Avenue, Kano", rating: 4.5 , image: ClinicOne},
    { name:"Bright Smiles", location: "Frank Ahmed District, Lagos", rating: 4.7, image: ClinicTwo },
    { name:"Happy Teeth", location: "23, Beatrice Bypass, Abuja", rating: 4.6, image: ClinicThree },
]

export const testimonials = [
  {
    user: "Winner Beatrice",
    company: "Business Woman-Abuja",
    image: user1,
    text: "Booking my appointment through Oremlo was unbelievably easy. I found a top-rated clinic in Abuja within minutes, and the whole process felt professional and secure.",
  },
  {
    user: "Kasim Nurudeen",
    company: "Taxi Driver - Kano",
    image: user2,
    text: "Booking my appointment through Oremlo was unbelievably easy. I found a top-rated clinic in Kano within minutes, and the whole process felt professional and secure.",
  },
  {
    user: "Beatrice Samson",
    company: "School Teacher - Lagos",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
];
