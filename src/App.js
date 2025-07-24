
import profilePic from './assets/profile.jpg'; 
function App() {
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Hero */}
      <header className="flex flex-col items-center justify-center flex-1 text-center px-6 py-12">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 dark:text-white mb-4">
          ¡Bienvenido a mi App en React!
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
          Esta aplicación está desplegada en <strong className="font-semibold">AWS S3</strong>.
        </p>
      </header>
      {/* Sobre mí */}
      <section className="flex flex-col items-center bg-white dark:bg-gray-800 py-12 px-6 space-y-6">
        <img
          src={profilePic}
          alt="Foto de Carlota"
          className="w-32 h-32 rounded-full shadow-lg"
        />
        <div className="max-w-xl text-center space-y-4">
          <h2 id="about-me-title" className="text-3xl font-bold text-gray-900 dark:text-white">
            Sobre mí
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            Soy desarrolladora web junior con conocimientos en <strong>frontend (React, Angular)</strong> y <strong>backend (Flask, Python, MySQL)</strong>.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Destaco por ser organizada, persistente y constante, capaz de trabajar en entornos colaborativos. Estoy en búsqueda de una oportunidad laboral para seguir creciendo como desarrolladora, aportar mis conocimientos y seguir aprendiendo en un entorno profesional.
          </p>
          <ul className="flex justify-center space-x-6">
            <li>
              <a
                href="https://www.linkedin.com/in/carmial/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Perfil de LinkedIn"
                className="text-blue-600 hover:underline"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/carmial65?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Repositorio GitHub"
                className="text-gray-900 dark:text-gray-100 hover:underline"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 mt-auto text-gray-500 dark:text-gray-400">
        ©{new Date().getFullYear()} Carlota de Miguel. Desplegado en AWS S3.
      </footer>
    </div>
  );
}

export default App;
