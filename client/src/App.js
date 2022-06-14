import { useState } from 'react';
import Blog from './components/Blog';
import Features from './components/Features';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Testimonials from './components/Testimonials';
import Works from './components/Works';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Resources from './components/Resources';
import Signin from './components/Signin';
import Blog1 from './components/Blog1';
import OutComputer from './components/OutComputer';
import Outsanskrit from './components/Outsanskrit';
import OutSocial from './components/OutSocial';
import OutMaths from './components/OutMaths';
import OutEnglish from './components/OutEnglish';
import OutScience from './components/OutScience';

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  };

  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Navbar toggleMode={toggleMode} />
            <Home />
            <Features mode={mode} />
            <Works mode={mode} />
            <Testimonials mode={mode} />
            <Blog mode={mode} />
            <Footer />
          </Route>
          <Route exact path='/signin'>
            {' '}
            <Navbar toggleMode={toggleMode} />
            <Signin toggleMode={toggleMode} mode={mode} />
            <Footer />
          </Route>
          <Route exact path='/signup'>
            {' '}
            <Navbar toggleMode={toggleMode} />
            <Signup toggleMode={toggleMode} mode={mode} />
            <Footer />
          </Route>
          <Route
            exact
            path='/resources/shahhet/12344283477@ea3rq38ybj9ugq/shahhet/website/secure/12e134fja2433jal3'
          >
            {' '}
            <Navbar toggleMode={toggleMode} />
            <Resources toggleMode={toggleMode} mode={mode} />
            <Footer />
          </Route>

          <Route
            exact
            path='/resources/shahhet/12344283477@ea3rq38ybj9ugq/shahhet/website/secure/12e134fja2433jal3/maths'
          >
            {' '}
            <Navbar toggleMode={toggleMode} />
            <OutMaths mode={mode} toggleMode={toggleMode} />
            <Footer />
          </Route>

          <Route
            exact
            path='/resources/shahhet/12344283477@ea3rq38ybj9ugq/shahhet/website/secure/12e134fja2433jal3/science'
          >
            {' '}
            <Navbar toggleMode={toggleMode} />
            <OutScience mode={mode} />
            <Footer />
          </Route>

          <Route
            exact
            path='/resources/shahhet/12344283477@ea3rq38ybj9ugq/shahhet/website/secure/12e134fja2433jal3/english'
          >
            {' '}
            <Navbar toggleMode={toggleMode} />
            <OutEnglish mode={mode} />
            <Footer />
          </Route>

          <Route
            exact
            path='/resources/shahhet/12344283477@ea3rq38ybj9ugq/shahhet/website/secure/12e134fja2433jal3/socialscience'
          >
            {' '}
            <Navbar toggleMode={toggleMode} />
            <OutSocial mode={mode} />
            <Footer />
          </Route>

          <Route
            exact
            path='/resources/shahhet/12344283477@ea3rq38ybj9ugq/shahhet/website/secure/12e134fja2433jal3/sanskrit'
          >
            {' '}
            <Navbar toggleMode={toggleMode} />
            <Outsanskrit mode={mode} />
            <Footer />
          </Route>

          <Route
            exact
            path='/resources/shahhet/12344283477@ea3rq38ybj9ugq/shahhet/website/secure/12e134fja2433jal3/computer'
          >
            {' '}
            <Navbar toggleMode={toggleMode} />
            <OutComputer mode={mode} />
            <Footer />
          </Route>

          <Route exact path='/blog1/manashah/russia/vs/ukraine'>
            {' '}
            <Navbar toggleMode={toggleMode} />
            <Blog1
              heading="Russia Vs Ukraine!! World War 3?? How India Will Play It's Role ? How is
        U.S.A Getting Benifitted From The War"
              para="The start of the Russia-Ukraine conflict has a long way down the lane
        and it began in 2014 with Russia’s invasion of Ukraine. Russia annexed
        the Crimean peninsula and that was the onset of various current 
        political conflicts. During the decades of the cold war between the US
        and USSR, two institutions named NATO, which was formed in 1949 and 
        Warsaw Pact, which was formed in 1955, came into existence. NATO or 
        North Atlantic Treaty Organisation represents the US and many western
        European countries whereas the Warsaw pact, as the name suggests,
        consisted of the USSR and other east European countries. NATO is
        committed to the principle that an attack against one of them or several
        of them would be considered an attack against all of them. After the
        disintegration of the USSR in 1991, the NATO countries have time and
        again aimed for an eastward expansion and the addition of Ukraine
        amongst the NATO countries would for the first time, put Russia under
        direct border to border military threat. Ukraine, being a sovereign
        country, has all the rights to join NATO but Russia having military
        history with the NATO countries wants to prevent one of its neighboring
        countries from becoming a part of NATO.{' '}"
              written='Mana Shah'
              WrittenOn='19th March , 2022'
              mode={mode}
            />
            <Footer />
          </Route>

          <Route exact path='/blog1/rishi/quantum/physic'>
            {' '}
            <Navbar toggleMode={toggleMode} />
            <Blog1
              heading='What is quantum physics? Everything About quatum physic. Is it really Worth learning?'
              para='Put simply, it’s the physics that explains how
              everything works: the best description we have of the nature of
              the particles that make up matter and the forces with which they interact.
              Quantum physics underlies how atoms work, and sowhy chemistry and biology work as they do. You, me and the gatepost – at
              some level at least, we’re all dancing to the quantum tune. If you want to
              explain how electrons move through a computer chip, how photons of
              light get turned to electrical current in a solar panel or amplify themselves
              in a laser, or even just how the sun keeps burning, you’ll need to use
              quantum physics.But to understand how things work in the real world, quantum mechanics
              must be combined with other elements of physics – principally, Albert
              Einstein’s special theory of relativity, which explains what happens when
              things move very fast – to create what are known as quantum field
              theories.Quantum mechanics is a fundamental theory in physics that provides a
              description of the physical properties of nature at the scale
              of atoms and subatomic particles.
              It is the foundation of all quantum
              physics including quantum chemistry, quantum field theory, quantum
              technology, and quantum information science. Quantum Physics Is Discrete
              Its right there in the name-- the word quantum comes from the Latin for
              how much and reflects the fact that quantum models always involve
              something coming in discrete amounts. The energy contained in a
              quantum field comes in integer multiples of some fundamental energy. For
              light, this is associated with the frequency and wavelength of the light--
              high-frequency, short-wavelength light has a large characteristic energy,
              which low-frequency, long-wavelength light has a small characteristic
energy.Ultra-precise spectroscopy can also be used to look for things like dark
              matter, and is part of the motivation for a low-energy fundamental physics
              institute. '
              written='Rishi Sai'
              WrittenOn='15th March , 2022'
              mode={mode}
            />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
