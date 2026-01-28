import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-4">
            <img 
              src="/images/enk-logo.png" 
              alt="School Logo" 
              className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
            />
            <div>
              <h1 className="text-lg sm:text-2xl font-bold text-gray-800">Ecole Nour El Karim</h1>
              <p className="text-xs sm:text-sm text-gray-600 hidden sm:block">Excellence & Engagement</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 sm:gap-4">
            <Link 
              to="/connexion" 
              className="px-3 py-2 sm:px-6 sm:py-2 text-sm sm:text-base text-gray-700 font-semibold hover:text-blue-600 transition-colors"
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