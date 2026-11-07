
import Header from '../Header/Header.tsx'
import Footer from '../Footer/Footer.tsx'
import Landing from '../LandingPage/LandingPage.tsx'
import './Home.css'

function Home(){

    return(
        <div className="Home">
            <Header></Header>
            <Landing></Landing>
            <Footer></Footer>
        </div>
    );
}
export default Home;