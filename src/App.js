import React, {useRef} from 'react';
import './App.css'; // Import the general stylesheet
import Header from './Header'; // Import the Header component
import Home from './Home'
import Contact from './contact';
import About from './components/About'; // Import the About component
k


function App() {

  return (
    <div className='App'>
      <Header/>
      <div className='content-wrap'>
        <section id="home">
           <Home /> 
        </section>

        <section id="about">
          <About> </About>
        </section>
        <section id="contact">
        <Contact></Contact>
        </section> 
       
      </div>

    </div>
  );
}

export default App;