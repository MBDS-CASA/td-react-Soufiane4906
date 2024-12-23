// src/Menu.jsx
import { useState } from 'react';

function Menu({ onSelect }) {
  const [activeItem, setActiveItem] = useState(null);

  const handleClick = (text) => {
    setActiveItem(text);
    onSelect(text);
  };

  const menuItems = ['Notes', 'Etudiants', 'Matières', 'A propos'];

  return (
    <nav>
      <ul>
        {menuItems.map((item) => (
          <li
            key={item}
            onClick={() => handleClick(item)}
            style={{ fontWeight: activeItem === item ? 'bold' : 'normal' }}
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;