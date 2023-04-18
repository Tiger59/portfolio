
import './App.css';
import Intro from './components/intro';
import Header from './components/organisms/header';
import Home from './components/home'
import About from './components/about'
import Carrier from './components/carrier'
import Skills from './components/skills'
import Qualifications from './components/qualifications'
import Works from './components/works'
import SocialMedia from './components/socialMedia';
import Footer from './components/organisms/footer';


function App() {
  return (
    <div className="App">
      <Intro/>
      <Header />
      <Home />
      <About />
      <Carrier />
      <Skills />
      <Qualifications />
      <Works />
      <SocialMedia />
      <Footer />
    </div>

  );
}

export default App;
