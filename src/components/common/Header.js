// src/components/common/Header.js
import React from 'react';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/users">Users</a></li>
          <li><a href="/catalog">Catalog</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
