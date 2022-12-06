import "./App.css";
import NavbarComponent from "./components/navBar";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroImage from "./components/heroSection";
import UpcomingGames from "./components/upcomingGames";
import Testimonials from "./components/testimonialSection";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <HeroImage />

      <h1 className="headline">UPCOMING GAMES</h1>
      <UpcomingGames />
      <h1 className="headline">Testimonials</h1>
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
