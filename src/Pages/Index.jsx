import Footer from '../component/Footer';
import HomePic from '../component/HomePic';
import Navbar from '../component/Navbar';
import '../Style/layoutIndex.css';


function Index (){
    return(
        <div>
        <Navbar />
        
        <HomePic/>
        <Footer/>
        </div>
    )
}
export default Index;