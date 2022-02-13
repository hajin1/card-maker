import React from 'react';
import { THEME_TYPE } from '../maker/maker';
import styles from './card.module.css';
const DEFAULT_IMAGE = '/images/default_logo.png';

const getStyles = (theme) => {
    switch (theme) {
        case THEME_TYPE.DARK:
            return styles.dark;
        case THEME_TYPE.LIGHT:
            return styles.light;
        case THEME_TYPE.COLORFUL:
            return styles.colorful;
        default:
            throw new Error(`unknown theme : ${theme}`);
    }
}

const Card = ({ card }) => {
    const { name, company, title, email, message, theme, fileURL } = card;
    const url = fileURL || DEFAULT_IMAGE;
    return (
        <li className={`${styles.card} ${getStyles(theme)}`}>
            <img className={styles.avatar} src={url} alt="profile" />
            <div className={styles.info}>
                <h1 className={styles.name}>{name}</h1>
                <p className={styles.company}>{company}</p>
                <p className={styles.title}>{title}</p>
                <p className={styles.email}>{email}</p>
                <p className={styles.message}>{message}</p>
            </div>
        </li>
    );
}
export default Card;