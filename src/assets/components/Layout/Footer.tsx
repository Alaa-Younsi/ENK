const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="sm:col-span-2">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">École Nour El Karim</h3>
            <p className="text-gray-300 mb-4 text-sm sm:text-base">
              École privée agréée par l'état, offrant une éducation de qualité dans un environnement moderne et bienveillant.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <span className="text-white font-bold">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                <span className="text-white font-bold">📷</span>
              </a>
              <a href="#" className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <span className="text-white font-bold">in</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4">Liens Rapides</h4>
            <ul className="space-y-2 text-sm sm:text-base">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Accueil</a></li>
              <li><a href="#info" className="text-gray-300 hover:text-white transition-colors">À Propos</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              <li><a href="/inscription" className="text-gray-300 hover:text-white transition-colors">Inscription</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
              <li>42 Rue El Nakhil</li>
              <li>Souidania, Alger</li>
              <li className="pt-2">0669.70.49.83</li>
              <li>contact@enk-school.dz</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400 text-sm sm:text-base">
          <p className="mb-2">
            Website Created by{' '}
            <a 
              href="https://alaayounsi.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors font-semibold"
            >
              Alaa Younsi
            </a>
          </p>
          <p>&copy; 2023 École Nour El Karim. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
