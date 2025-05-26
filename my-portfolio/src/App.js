import MyNavBar from './components/MyNavBar';
import Hero from './components/Hero';
import ProjectsSection from './components/ProjectSection';  // ✅ the section with all cards
import Contact from './components/Contact'; // ✅ the contact section
import Footer from './components/Footer';
import Thesis from './components/Thesis'; // ✅ the thesis section

function App() {
  return (
    <>
      <MyNavBar />
      <Hero />
      <Thesis />
      <ProjectsSection />
      <Contact />
      <Footer />
      {/* Contact, Footer, etc. */}
    </>
  );
}

export default App;
