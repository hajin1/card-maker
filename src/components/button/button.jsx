
import React, { memo } from 'react';
import styles from './button.module.css';

const Button = ({ name, onClick }) => (
    <button className={styles.button} onClick={onClick}>
        {name}
    </button>

);

export default memo(Button);