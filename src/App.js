import React from 'react';

function App() {
  return (
    <header className="bg-blue-600 text-white p-8 text-center rounded-md shadow-md" aria-label="Bienvenida">
      <h1 className="text-3xl font-bold mb-4">¡Bienvenido a mi App en React!</h1>
      <p className="text-lg mb-6">
        Esta aplicación está desplegada en <strong className="font-semibold">AWS S3</strong>.
      </p>
      <a
        className="inline-block bg-white text-blue-600 font-medium px-6 py-2 rounded hover:bg-blue-100 transition"
        href="https://aws.amazon.com/s3/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Aprende más sobre AWS S3
      </a>
    </header>
  );
}

export default App;
