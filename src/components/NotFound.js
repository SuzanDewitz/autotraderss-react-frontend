import React from 'react';
import Asset from './Asset'; // Import the 'Asset' component from the correct file path
import NoResultsImage from '../assets/no-results.png';
import styles from '../styles/NotFound.module.css';

// 404 page
const NotFound = () => {
  return (
    <div className={styles.Margin}>
      <Asset
        src={NoResultsImage}
        message={`Sorry, the page you're looking for doesn't exist`}
      />
    </div>
  );
};

export default NotFound;
