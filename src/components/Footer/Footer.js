import React from 'react';

import socialFacebook from '../../../assets/images/social/facebook-white.svg';
import socialTwitter from '../../../assets/images/social/twitter-white.svg';
import socialInstagram from '../../../assets/images/social/instagram-white.svg';
import storeApple from '../../../assets/images/store/app-store.svg';
import storeAndroid from '../../../assets/images/store/play-store.svg';
import storeWindows from '../../../assets/images/store/windows-store.svg';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__main">
          <nav className="footer__navigation">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Terms and Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Collection Statement</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
              <li>
                <a href="#">Manage Account</a>
              </li>
            </ul>
          </nav>
          <p className="footer__copyright">Copyright © 2016 DEMO Streaming. All rights reserved</p>
        </div>
        <div className="footer__secondary">
          <div className="footer__social">
            <ul>
              <li>
                <a href="#">
                  <img src={socialFacebook} alt=""/>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={socialTwitter} alt=""/>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={socialInstagram} alt=""/>
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__stores">
            <ul>
              <li>
                <a href="#">
                  <img src={storeApple} alt=""/>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={storeAndroid} alt=""/>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={storeWindows} alt=""/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;