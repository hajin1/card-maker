import styles from './maker.module.css';

import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import { useNavigate } from 'react-router-dom';

const Maker = ({ authService }) => {
    const navigate = useNavigate();

    const onLogout = () => {
        authService.logout().then(() => {
            navigate('/');
        });
    };

    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout} />
            <section className={styles.section}>
                Maker
            </section>
            <Footer />
        </section>
    );
};

export default Maker;