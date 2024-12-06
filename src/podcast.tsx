import React from 'react';
import { useNavigate } from 'react-router-dom'; // Assurez-vous d'utiliser react-router-dom pour la navigation
import oceanBackground from '../src/asset/ocean.gif';

const VideoPodcastPage: React.FC = () => {
  const podcasts = [
    { title: 'Podcast 1: La magie de l\'océan', url: 'https://youtu.be/lxYIngIl0OU' },
    { title: 'Podcast 2: L\'équilibre fragile des récifs', url: 'https://youtu.be/_XNB3EvdDLA' },
  ];

  const navigate = useNavigate(); // Hook pour naviguer entre les pages

  return (
    <div
      className="min-h-screen flex flex-col items-center p-6"
      style={{
        backgroundImage: `url(${oceanBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Header Section */}
      <header className="text-center mb-8 bg-black bg-opacity-50 p-4 rounded-md mt-8">
        <h1 className="text-3xl font-bold text-white">Podcasts Vidéo</h1>
        <p className="text-white text-lg">Plongez dans nos discussions passionnantes sur l'océan</p>
      </header>

      {/* Button Retour */}
      <button
        onClick={() => navigate('/')} // Navigue vers la page Accueil
        className="bg-gray-500 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out mb-6"
      >
        Retour à l'Accueil
      </button>

      {/* Video Podcasts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
        {podcasts.map((podcast, index) => (
          <div
            key={index}
            className="bg-black bg-opacity-60 p-4 rounded-lg shadow-lg text-white flex flex-col items-center"
          >
            <h2 className="text-xl font-semibold mb-4">{podcast.title}</h2>
            <button
              onClick={() => window.open(podcast.url, '_blank')}
              className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out"
            >
              Regarder sur YouTube
            </button>
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <footer className="mt-12 text-center text-gray-200 text-sm bg-black bg-opacity-50 p-2 rounded-md">
        <p>© 2024 - Découvrez le lien entre l'océan et l'humain</p>
      </footer>
    </div>
  );
};

export default VideoPodcastPage;
