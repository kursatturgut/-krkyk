import logo from './logo.svg';
import './App.css';
import { Navbar } from './commpenent/navbar/navbar';
import { Headre } from './commpenent/header/headre';
import { Facilitis } from './commpenent/facilities/facilitis';
import { About } from './commpenent/about/about';
import { Classtart } from './commpenent/classtrat/classtart';

import { Team } from './commpenent/team/team';
import { Testimonal } from './commpenent/testimonal/testimonal';
import { Blog } from './commpenent/Blog/Blog';
import { Footer } from './commpenent/Footer/Footer';
import Contact from './commpenent/Contact/Contact';

function App() {
  return (
    <>
    <Navbar/>
    <Headre/>
     <Facilitis/>
     <About/>
     <Classtart/>
     <Testimonal/>
     
      <Team/>
      <Blog/>
      <Contact/>
      <Footer/>

    </>
    
  );
}

export default App;
