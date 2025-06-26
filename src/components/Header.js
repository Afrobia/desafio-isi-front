import React from 'react';

function Header({ userName }) {
  const initials = userName.split(' ').map(n => n[0]).join('');

  return (
    <header className="header">
      <div className="user-info">
        <div className="user-avatar">{initials}</div>
        <span className="text-gray-700 font-medium">{userName}</span>
      </div>
    </header>
  );
}

export default Header;