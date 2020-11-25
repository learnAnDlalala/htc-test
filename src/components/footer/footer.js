import React from 'react';

import './footer.css';

const Footer = () => {
  return (
    <div className="footer row">
      <img
        className="footer__logo"
        src={process.env.PUBLIC_URL + '/htc_logo.png'}
        alt="htc-logo"
      />
      <div className="footer__body">
        <div className="footer__body__information">
          <div className="footer__body__information__line">
            426057, Россия, Удмуртская Республика, г. Ижевск, ул. Карла Маркса,
            246 (ДК «Металлург»)
          </div>
          <div className="footer__body__information__line">
            +7 (3412) 93-88-61, 43-29-29
          </div>
        </div>

        <a className="footer__body__link" href="https://htc-cs.ru/">
          htc-cs.ru
        </a>
      </div>
    </div>
  );
};

export default Footer;
