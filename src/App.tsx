import React from 'react';
import logo from './assets/images/logo.svg';
import heroImage from './assets/images/illustration-working.svg';

const App = () => {
  return (
    <div className="h-full">
      <header className="bg-white pt-6 px-4">
        <div className="container mx-auto flex items-center">
          <img src={logo} alt="logo" />
          <nav className="flex justify-between w-full">
            <ul className="flex">
              <li>Features</li>
              <li>Pricing</li>
              <li>Resources</li>
            </ul>
            <div className="flex">
              <button>Login</button>
              <button>Sign Up</button>
            </div>
          </nav>
        </div>
      </header>
      <main>
        <section className="bg-white relative overflow-hidden">
          <img
            src={heroImage}
            alt=""
            className="
              h-80 object-cover object-left
              sm:absolute right-0 sm:transform sm:translate-x-20
            "
          />
          <div className="container mx-auto flex flex-col">
            <h1>More than just shorter links</h1>

            <p>Build your brand’s recognition and get detailed insights
            on how your links are performing.</p>

            <button>Get Started</button>
            <div className="
              bg-shorten-mobile sm:bg-shorten-mobile bg-primary-violet bg-cover bg-center
              absolute bottom-0 -translate-y-1/2
            ">
              <form action="">
                <input type="text" />
                <button type="submit">Shorten It!</button>
              </form>
            </div>
          </div>
        </section>
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
