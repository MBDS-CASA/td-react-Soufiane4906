import { useState } from 'react';
import './App.css';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Menu from './components/Menu.jsx';
import Notes from './components/Notes.jsx';
import Etudiants from './components/Etudiants.jsx';
import Matieres from './components/Matieres.jsx';
import About from './components/About.jsx';
import Home from "./components/Home.jsx";
import { motion } from 'framer-motion';

function App() {

  const renderContent = () => {
    switch (selectedMenu) {
      case 'Home':
        return <Home />;
      case 'Notes':
        return <Notes />;
      case 'Etudiants':
        return <Etudiants />;
      case 'Matières':
        return <Matieres />;
      case 'A propos':
        return <About />;
      default:
        return <Home />;
    }
  };

  const [selectedMenu, setSelectedMenu] = useState('Home');

  return (
      <div className="contents min-h-screen bg-gray-100">
        <div className="w-64 fixed h-full bg-gray-900">
          <div className="flex flex-col h-full">
            <Menu onSelect={setSelectedMenu} activeItem={selectedMenu} />
          </div>
        </div>

        <div className="flex-1 ml-64">
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 p-8">
              <motion.div
                  key={selectedMenu}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
              >
                {renderContent()}
              </motion.div>
            </main>
            <Footer />
          </div>
        </div>
      </div>
  );
}

export default App;
