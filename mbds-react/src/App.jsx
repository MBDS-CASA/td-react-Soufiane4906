import { useState } from 'react';
import './App.css';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Menu from './components/Menu.jsx';
import Notes from './components/Notes.jsx';


function App() {
  const [selectedMenu, setSelectedMenu] = useState('Notes');

  const renderContent = () => {
    switch (selectedMenu) {
            case 'Notes':
        return <Notes />;

      default:
        return <Notes />;
    }
  };

  return (
    <>
      <Header />
      <Menu onSelect={setSelectedMenu} />
      {renderContent()}
      <Footer />
    </>
  );
}

export default App;