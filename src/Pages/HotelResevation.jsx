import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import HotelGallery from "../component/HotelGallery";

export default function HotelRevation() {
  return (
    <div>
      <Navbar />
      <HotelGallery />   {/* First thing they see */}
      <Footer />
    </div>
  );
}
