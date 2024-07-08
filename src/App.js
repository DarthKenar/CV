import "./App.css";
// import Header from './components/Header/Header';
// import NameSection from './components/NameSection/NameSection';
// import ProjectSection from './components/ProjectSection/ProjectSection';
// import ContactSection from './components/ContactSection/ContactSection';
// import Footer from './components/Footer/Footer';
import background from "./giphy.webp";
function App() {
  return (
    <div className="App">
      <div style={{ backgroundImage: `url(${background})`, height: "100vh" }}>
        <a href="https://github.com/DarthKenar">{"<--"}</a>
      </div>
      {/* <Header/>
      <NameSection/>
      <ProjectSection/>
      <ContactSection/>
      <Footer/> */}
    </div>
  );
}

export default App;
