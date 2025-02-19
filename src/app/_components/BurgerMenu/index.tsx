'use client';

import { useState } from 'react';

import classNames from 'classnames';

import './styles.scss';

const BurgerMenu = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const handleBurgerMenuState = () => {
    setIsBurgerMenuOpen((prev) => !prev);
  };

  return (
    <div
      className={classNames('burger-menu-component', {
        open: isBurgerMenuOpen,
      })}
      onClick={handleBurgerMenuState}
    >
      <div className="burger-menu-component__line first"></div>
      <div className="burger-menu-component__line second"></div>
      <div className="burger-menu-component__line third"></div>
    </div>
  );
};

export default BurgerMenu;
