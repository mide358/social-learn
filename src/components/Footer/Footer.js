import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faTwitter,
  faLinkedin,
  faGithub,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  const today = new Date();
  return (
    <footer>
      <div>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/"
          className="linkedin foot"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>

        <a
          target="_blank"
          rel="noreferrer"
          href="mailto:info@sociaLearn.com"
          className="email foot"
        >
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/"
          className="twitter foot"
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
      </div>

      <div className="foot copyright">
        <p>
          <FontAwesomeIcon icon={faCopyright} size="1x" /> Social Learn,&nbsp;
          {today.getFullYear()}
        </p>
      </div>
    </footer>
  );
};
