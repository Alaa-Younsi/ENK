import Header from '../components/Layout/Header.tsx';
import MainSection from '../components/Layout/Home/Auth/MainSection.tsx';
import PresentationSection from '../components/Layout/Home/PresentationSection.tsx';
import InfoSection from '../components/Layout/Home/InfoSection.tsx';
import Footer from '../components/Layout/Footer.tsx';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-0">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/image1.jpg" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/70"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 animate-fade-in">
            Bienvenue à l'École Nour El Karim
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
            École privée agréée par l'état - Excellence académique et encadrement personnalisé
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <a href="#contact" className="px-6 sm:px-8 py-3 bg-white text-blue-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
              Nous Contacter
            </a>
            <a href="#info" className="px-6 sm:px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-colors">
              En Savoir Plus
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>
      
      {/* Contact Info Section */}
      <section id="contact" className="py-12 sm:py-16 bg-white">
        <MainSection />
      </section>
      
      {/* Presentation Section */}
      <section id="info" className="py-12 sm:py-16 bg-gray-50">
        <PresentationSection />
      </section>
      
      {/* Info Cards Section */}
      <section className="py-12 sm:py-16 bg-white">
        <InfoSection />
      </section>
      
      <Footer />
    </div>
  );
};

export default HomePage;