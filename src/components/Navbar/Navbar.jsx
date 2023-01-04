import React from 'react';
import { AiFillFile, AiFillGithub, AiFillLinkedin } from 'react-icons/Ai';
import style from './Navbar.module.scss';
import imgUrl from '../../assets/cv.pdf';
import PropTypes from 'prop-types';

const Navbar = ({ position }) => {
  return (
    <nav className={position ? style.navbar : style['navbar--bottom']}>
      <div className={style['navbar__wrapper']}>
        <h4 className={[style['navbar__name'], 'headingS'].join(' ')}>
          antonismaras
        </h4>
        <div
          className={
            position
              ? style['navbar__iconsWrapper']
              : style['navbar__iconsWrapper--bottom']
          }
        >
          <a href="https://github.com/anmaras" target="_blank" rel="noreferrer">
            <AiFillGithub className={style['navbar__icon']} size={25} />
          </a>
          <a href="" target="_blank" rel="noreferrer">
            <AiFillLinkedin className={style['navbar__icon']} size={25} />
          </a>
          <a href={imgUrl} download>
            <AiFillFile className={style['navbar__icon']} size={25} />
          </a>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  position: PropTypes.bool.isRequired,
};

export default Navbar;
