import { Link } from 'react-router-dom';
import LoginForm from '../components/Layout/Home/Auth/LoginForm.tsx';

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 sm:py-4 px-4">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/image1.jpg" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-purple-900/90"></div>
      </div>
      
      {/* Navigation Links */}
      <div className="fixed top-6 left-6 z-30 flex gap-4">
        <Link 
          to="/" 
          className="px-6 py-2 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/30"
        >
          Accueil
        </Link>
        
        <Link 
          to="/inscription" 
          className="px-6 py-2 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/30"
        >
          Inscription
        </Link>
      </div>
      
      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 sm:px-8 py-6">
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4">
              <img 
                src="/images/enk-logo.png" 
                alt="School Logo" 
                className="w-12 h-12 sm:w-16 sm:h-16 object-contain bg-white rounded-lg p-2"
              />
              <div className="text-white">
                <h1 className="text-lg sm:text-xl font-bold">École Nour El Karim</h1>
                <p className="text-xs sm:text-sm text-blue-100">Espace Connexion</p>
              </div>
            </div>
          </div>
          
          {/* Form Section */}
          <div className="px-6 sm:px-8 py-6 sm:py-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 text-center mb-6">
              Connectez-vous
            </h2>
            <LoginForm />
            
            <div className="mt-6 text-center">
              <p className="text-sm sm:text-base text-gray-600">
                Pas encore de compte?{' '}
                <Link 
                  to="/inscription" 
                  className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                >
                  Inscrivez-vous
                </Link>
              </p>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl"></div>
        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>
      </div>
    </div>
  );
};

export default LoginPage;