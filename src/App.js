
import './App.css';
import Intro from './components/intro';
import Header from './components/organisms/header';
import About from './components/about'
import Carrier from './components/carrier'
import Skills from './components/skills'
import Qualifications from './components/qualifications'
import Works from './components/works'
import SocialMedia from './components/socialMedia';
import Blog from './components/blog';
import Footer from './components/organisms/footer';


function App() {
  return (
    <div className="App">
      <Intro/>
      <Header />
      <About />
      <Carrier />
      <Skills />
      <Qualifications />
      <Works />
      <SocialMedia />
      <Blog/>
      <Footer />
    </div>

  );
}

export default App;
