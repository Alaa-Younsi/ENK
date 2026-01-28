const PresentationSection = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Notre École</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src="/images/enk2.jpg" 
              alt="École" 
              className="rounded-2xl shadow-2xl w-full h-64 sm:h-80 lg:h-96 object-cover"
            />
          </div>
          
          <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">Une éducation d'excellence depuis 2010</h3>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              L'École Nour El Karim est un établissement privé agréé par l'état, dédié à l'excellence académique 
              et au développement personnel de chaque élève.
            </p>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Nous offrons un environnement d'apprentissage stimulant et bienveillant, où les élèves peuvent 
              s'épanouir et atteindre leur plein potentiel grâce à un encadrement personnalisé et des méthodes 
              pédagogiques modernes.
            </p>
            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4">
              <div className="bg-blue-50 p-3 sm:p-4 rounded-lg text-center">
                <p className="text-2xl sm:text-3xl font-bold text-blue-600">500+</p>
                <p className="text-xs sm:text-sm text-gray-600">Élèves</p>
              </div>
              <div className="bg-green-50 p-3 sm:p-4 rounded-lg text-center">
                <p className="text-2xl sm:text-3xl font-bold text-green-600">50+</p>
                <p className="text-xs sm:text-sm text-gray-600">Enseignants</p>
              </div>
              <div className="bg-purple-50 p-3 sm:p-4 rounded-lg text-center">
                <p className="text-2xl sm:text-3xl font-bold text-purple-600">15+</p>
                <p className="text-xs sm:text-sm text-gray-600">Années</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresentationSection;
