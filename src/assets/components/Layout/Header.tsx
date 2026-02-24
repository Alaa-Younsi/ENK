import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className={`container mx-auto px-4 sm:px-6 transition-all duration-300 ${
        scrolled ? 'py-2 sm:py-3' : 'py-3 sm:py-5'
      }`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-4">
            <img 
              src="/images/enk-logo.png" 
              alt="School Logo" 
              className={`object-contain transition-all duration-300 ${
                scrolled ? 'w-10 h-10 sm:w-12 sm:h-12' : 'w-12 h-12 sm:w-16 sm:h-16'
              }`}
            />
            <div>
              <h1 className={`font-bold transition-all duration-300 ${
                scrolled 
                  ? 'text-base sm:text-xl text-gray-800' 
                  : 'text-lg sm:text-2xl text-white'
              }`}>
                Ecole Nour El Karim
              </h1>
              <p className={`text-xs sm:text-sm hidden sm:block transition-all duration-300 ${
                scrolled ? 'text-gray-600' : 'text-white/90'
              }`}>
                Excellence & Engagement
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 sm:gap-4">
            <Link 
              to="/connexion" 
              className={`px-3 py-2 sm:px-6 sm:py-2 text-sm sm:text-base font-semibold rounded-lg transition-all duration-300 ${
                scrolled 
                  ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' 
                  : 'text-white border-2 border-white/30 hover:bg-white/10'
              }`}
            >
              Connexion
            </Link>
            
            <Link 
              to="/inscription" 
              className="px-3 py-2 sm:px-6 sm:py-2 text-sm sm:text-base bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-md"
            >
              Inscription
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;