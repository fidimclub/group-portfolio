import './App.css';
import NavBar from './Components/NavBar'
import HeroSection from './Components/HeroSection';
import AboutUs from './Components/AboutUs';
import Icons from './Components/Icons';
import Footer from './Components/Footer';


function App() {
  return (
    <div >
      <header >
      <NavBar/>
      <HeroSection/>
      <AboutUs/>
      <Icons/>
      <Footer/>      
      </header>
    </div>
  );
}

export default App;
