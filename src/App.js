import './App.css';
import Header from './components/Header/Header';
import NameSection from './components/NameSection/NameSection';
import ProjectSection from './components/ProjectSection/ProjectSection';
import ContactSection from './components/ContactSection/ContactSection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <NameSection/>
      <ProjectSection/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}

export default App;
