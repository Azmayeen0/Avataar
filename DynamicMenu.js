import React, { useState } from 'react';
import './DynamicMenu.css';
const NavMenu = ({ items }) => {
  const [menu, setMenu] = useState(items.slice(0, 4));
  const [showMore, setShowMore] = useState(false);

  const handleShowMoreClick = () => {
    setShowMore(!showMore);
    if (!showMore) {
      setMenu(items);
    } else {
      setMenu(items.slice(0, 4));
    }
  };

  const handleItemClick = (item) => {
    // Custom logic for menu items.
    console.log(`Clicked: ${item}`);
  };

  return (
    <nav className="nav-menu">
      <ul className="menu-main">
        {menu.map((item, index) => (
          <li key={index} onClick={() => handleItemClick(item)}>
            {item}
          </li>
        ))}
      </ul>
      {items.length > 4 && (
        <button className="menu-more-btn" onClick={handleShowMoreClick}>
          Show {showMore ? 'Less' : 'More'}
        </button>
      )}
    </nav>
  );
};

export default NavMenu;