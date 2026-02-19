import AdminLogin from "../component/AdminlogIn";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

export default function Admin(){
    return(
        <div>
            <Navbar/>
            <AdminLogin/>
            <Footer/>
        </div>
    )
}