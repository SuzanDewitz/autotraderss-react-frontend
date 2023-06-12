import React from 'react';
import NoResultsImage from '../assets/no-results.png';
import styles from '../styles/NotFound.module.css';

const NotFound = () => {
  return (
    <div className={styles.Margin}>
      <img src={NoResultsImage} alt="No Results" className={styles.Image} />
      <p>Sorry, the page you're looking for doesn't exist</p>
    </div>
  );
};

export default NotFound;
