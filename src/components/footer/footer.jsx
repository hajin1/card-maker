import React, { memo } from 'react';
import styles from './footer.module.css';

const Footer = () => (
    <footer className={styles.footer}>Code your dream</footer>
);

export default memo(Footer);