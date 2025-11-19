import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';
import Blog from './pages/Blog';
import ContactUs from './pages/ContactUs';
import Login from './pages/Login';
import Testimonials from './pages/Testimonials';
import CompleteDenture from './Services/CompleteDenture';
import CosmeticDentistry from './Services/CosmeticDentistry';
import DentalCleaning from './Services/DentalCleaning';
import DentalCrownandBridges from './Services/DentalCrownandBridges';
import DentalFillings from './Services/DentalFillings';
import DentalImaplant from './Services/DentalImaplant';
import GumTreatment from './Services/GumTreatment';
import OrthodonticTreatment from './Services/OrthodonticTreatment';
import PediatricDental from './Services/PediatricDental';
import RootCanal from './Services/RootCanal';
import TeethWhitenting from './Services/TeethWhitenting';
import WisdomTeethRemoval from './Services/WisdomTeethRemoval';


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Testimonials />} />
       <Route  path="service/completdenture" element={<CompleteDenture/>} />
       <Route  path="service/cosmeticdentistry " element={<CosmeticDentistry/>} />
       <Route  path="service/dentalcleaning " element={<DentalCleaning/>} />
       <Route  path="service/dentalcrownandbridges " element={<DentalCrownandBridges/>} />
       <Route  path="service/dentalfillings " element={<DentalFillings/>} />
       <Route  path="service/dentalimaplant" element={<DentalImaplant/>} />
       <Route  path="service/gumtreatment" element={<GumTreatment/>} />
       <Route  path="service/orthodontictreatment" element={<OrthodonticTreatment/>} />
       <Route  path="service/pediatricdental" element={<PediatricDental/>} />
       <Route  path="service/rootcanal" element={<RootCanal/>} />
       <Route  path="service/teethwhitenting" element={<TeethWhitenting/>} />
       <Route  path="service/wisdomteethremoval" element={<WisdomTeethRemoval/>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
