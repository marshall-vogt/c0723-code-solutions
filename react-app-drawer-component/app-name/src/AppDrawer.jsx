import { AiOutlineMenu } from 'react-icons/ai';
import './AppDrawer.css';
import { useState } from 'react';

export default function AppDrawer({ menuItems }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="row">
      <MenuButton onClick={setIsOpen} isOpen={isOpen} />
      <MenuItems menuItems={menuItems} isOpen={isOpen} onClick={setIsOpen} />
      <Modal onClick={setIsOpen} isOpen={isOpen} />
    </div>
  );
}

function MenuButton({ onClick, isOpen }) {
  return (
    <div
      className="menuButton"
      onClick={() => onClick(true)}
      style={{ display: isOpen ? 'none' : undefined }}>
      <AiOutlineMenu />
    </div>
  );
}

function MenuItems({ menuItems, isOpen, onClick }) {
  return (
    <div
      className="menuItems"
      style={{ transform: isOpen ? 'translateX(0)' : 'translateX(-283px)' }}>
      <h2>Menu</h2>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index} onClick={() => onClick(false)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Modal({ onClick, isOpen }) {
  return (
    <div
      className="modal"
      onClick={() => onClick(false)}
      style={{ display: isOpen ? undefined : 'none' }}></div>
  );
}
