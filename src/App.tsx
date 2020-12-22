import React from 'react';
import logo from './assets/images/logo.svg';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="h-full">
      <Navbar />
      <main>
        <Hero />
        <section className="bg-neutral-gray">
          <div className="container mx-auto">
            <h2 className="text-center">
              Advanced Statistics
            </h2>
            <div className="text-center">
              Track how your links are performing across the web with our
              advanced statistics dashboard.
            </div>
            <div>
              <div></div>
              <div>
                Brand Recognition
              </div>
              <div>
                Boost your brand recognition with each click. Generic links don’t
                mean a thing. Branded links help instil confidence in your content.
              </div>
            </div>
            <div>
              <div></div>
              <div>
                Detailed Records
              </div>
              <div>
                Gain insights into who is clicking your links. Knowing when and where
                people engage with your content helps inform better decisions.
              </div>
            </div>
            <div>
              <div></div>
              <div>
                Fully Customizable
              </div>
              <div>
                Improve brand awareness and content discoverability through customizable
                links, supercharging audience engagement.
              </div>
            </div>
          </div>
        </section>
        <section className="bg-boost-mobile sm:bg-boost-desktop bg-primary-violet bg-cover bg-center">
          <h2>Boost your links today</h2>
          <button>Get Started</button>
        </section>
      </main>
      <footer className="bg-neutral-dark-violet text-white">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between">
          <img src={logo} alt="logo" />
          <div className="flex-grow sm:flex justify-evenly">
            <div>
              <h3>Features</h3>
              <ul>
                <li>Link Shortening</li>
                <li>Branded Links</li>
                <li>Analytics</li>
              </ul>
            </div>
            <div>
              <h3>Resources</h3>
              <ul>
                <li>Blog</li>
                <li>Developers</li>
                <li>Support</li>
              </ul>
            </div>
            <div>
              <h3>Company</h3>
              <ul>
                <li>About</li>
                <li>Our Team</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <ul className="flex">
              <li><img src="" alt="facebook" /></li>
              <li><img src="" alt="twitter" /></li>
              <li><img src="" alt="pinterest" /></li>
              <li><img src="" alt="instagram" /></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
